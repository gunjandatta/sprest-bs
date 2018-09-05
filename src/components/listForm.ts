import { Helper, SPTypes, Types, Web } from "gd-sprest";
import { Fabric } from "..";
import { Field } from ".";
import {
    IField, IListForm,
    IListFormAttachmentsProps,
    IListFormDisplay, IListFormDisplayProps,
    IListFormEdit, IListFormEditProps
} from "./types";
import { IListFormAttachmentInfo } from "gd-sprest/build/helper/types";

// Extend the list form
export const ListForm: IListForm = Helper.ListForm as any;

// Method to render the attachments view
ListForm.renderAttachmentsView = (props: IListFormAttachmentsProps) => {
    let attachments = props.info.attachments || [];

    // Render the list
    let renderList = (el: Element) => {
        let items: Array<Fabric.Types.IListItemProps> = [];

        // Parse the attachments
        for (let i = 0; i < attachments.length; i++) {
            let attachment = attachments[i];

            // Add the item
            items.push({
                primaryText: attachment.FileName,
                actions: [{
                    iconName: "Download",
                    url: attachment.ServerRelativeUrl
                }]
            });
        }

        // Render the list
        Fabric.List({
            el,
            items
        });
    };

    // Method to render the menu
    let renderMenu = (el: Element) => {
        // Render a command bar
        Fabric.CommandBar({
            el,
            mainCommands: [{
                text: "Upload",
                onClick: () => {
                    // Show a spinner
                    Fabric.Spinner({
                        el: props.el,
                        text: "Saving the attachment..."
                    });

                    // Show the file dialog
                    ListForm.showFileDialog(props.info).then(() => {
                        // Render the list
                        renderList(props.el.children[1]);

                        // Call the save event
                        props.onSave ? props.onSave(props.info) : null;
                    });
                }
            }]
        })
    };

    // Render the template
    props.el.innerHTML = "<div></div><div></div>";

    // Render the menu
    renderMenu(props.el.children[0]);

    // Render the list
    renderList(props.el.children[1]);
}

// Method to render a display form for an item
ListForm.renderDisplayForm = (props: IListFormDisplayProps): IListFormDisplay => {
    let fields = [];

    // Render the form template
    ListForm.renderFormTemplate(props);

    // Load the list item
    props.info.list.Items(props.info.item.Id)
        // Get the html for the fields
        .FieldValuesAsHtml()
        // Execute the request
        .execute(formValues => {
            let hasUserField = false;

            // Parse the fields
            for (let fieldName in props.info.fields) {
                // Get the element
                let elField = props.el.querySelector("[data-field='" + fieldName + "']");
                if (elField) {
                    let field = props.info.fields[fieldName];
                    let html = formValues[fieldName] || formValues[fieldName.replace(/\_/g, "_x005f_")] || "";

                    // Set the flag
                    hasUserField = hasUserField || field.FieldTypeKind == SPTypes.FieldType.User;

                    // Set the html for this field
                    elField.innerHTML = [
                        '<div class="display-form">',
                        Fabric.Templates.Label({
                            className: "field-label",
                            description: field.Description,
                            text: field.Title
                        }),
                        '<div class="field-value">' + html.replace(/\r?\n/g, '<br/>') + '</div>',
                        '</div>'
                    ].join('\n');

                    // Add this field
                    fields.push(elField);
                }
            }

            // See if we are displaying a user field
            if (hasUserField) {
                // Enable the persona
                window["ProcessImn"]();
            }
        });

    // Return the form
    return {
        getFields: () => { return fields; }
    }
};

// Render the edit form
ListForm.renderEditForm = (props: IListFormEditProps): IListFormEdit => {
    let controlMode = typeof (props.controlMode) === "number" ? props.controlMode : props.info.item ? SPTypes.ControlMode.Edit : SPTypes.ControlMode.New;
    let fields: Array<IField> = [];

    // Render the form template
    ListForm.renderFormTemplate(props);

    // Parse the fields
    for (let fieldName in props.info.fields) {
        let field = props.info.fields[fieldName];
        let value = props.info.item ? props.info.item[fieldName] : null;

        // Get the field element and ensure it exists
        let elField = props.el.querySelector("[data-field='" + fieldName + "']");
        if (elField == null) { continue; }

        // See if this is a read-only field
        if (field.ReadOnlyField) {
            // Do not render in the new form
            if (props.controlMode == SPTypes.ControlMode.New) { continue; }
        }

        // See if this is the hidden taxonomy field
        if (field.Hidden && field.FieldTypeKind == SPTypes.FieldType.Note && field.Title.endsWith("_0")) {
            // Do not render this field
            continue;
        }

        // See if this is an invalid field type
        if (field.FieldTypeKind == SPTypes.FieldType.Invalid) {
            // Ensure it's not a taxonomy field
            if (!field.TypeAsString.startsWith("TaxonomyFieldType")) { continue; }
        }

        // Render the field
        Field({
            controlMode,
            el: elField,
            fieldInfo: {
                field,
                listName: props.info.list.Title,
                name: fieldName,
                webUrl: props.info.webUrl
            },
            value
        }).then(field => {
            // Add the field
            fields.push(field);
        });
    }

    // Method to get the form values
    let getFormValues = (): { formValues: any, unknownUsers: any } => {
        let formValues = {};
        let unknownUsers = {};

        // Parse the fields
        for (let i = 0; i < fields.length; i++) {
            let field = fields[i];
            let fieldName = field.fieldInfo.name;
            let fieldValue: any = field.element.getValue();

            // Update the field name/value, based on the type
            switch (field.fieldInfo.type) {
                // Choice
                case SPTypes.FieldType.Choice:
                    // Update the field value
                    fieldValue = fieldValue && fieldValue.length > 0 ? fieldValue[0].value : null;
                    break;

                // Lookup
                case SPTypes.FieldType.Lookup:
                    // Append 'Id' to the field name
                    fieldName += fieldName.lastIndexOf("Id") == fieldName.length - 2 ? "" : "Id";

                    // See if this is a multi-value field
                    if ((field.fieldInfo as Types.Helper.IListFormLookupFieldInfo).multi) {
                        let values: Array<Fabric.Types.IDropdownOption> = fieldValue || [];
                        fieldValue = { results: [] };

                        // Parse the options
                        for (let j = 0; j < values.length; j++) {
                            // Add the value
                            fieldValue.results.push(values[j].value);
                        }
                    } else {
                        // Update the field value
                        fieldValue = fieldValue && fieldValue.length > 0 ? fieldValue[0].value : fieldValue;
                    }
                    break;

                // Multi-Choice
                case SPTypes.FieldType.MultiChoice:
                    let options: Array<Fabric.Types.IDropdownOption> = fieldValue || [];
                    fieldValue = { results: [] };

                    // Parse the options
                    for (let j = 0; j < options.length; j++) {
                        // Add the option
                        fieldValue.results.push(options[j].value);
                    }
                    break;

                // URL
                case SPTypes.FieldType.URL:
                    // See if the field value exists
                    if (fieldValue) {
                        // Add the metadata
                        fieldValue.__metadata = { type: "SP.FieldUrlValue" };
                    }
                    break;

                // User
                case SPTypes.FieldType.User:
                    // Append 'Id' to the field name
                    fieldName += fieldName.lastIndexOf("Id") == fieldName.length - 2 ? "" : "Id";

                    // See if this is a multi-value field
                    if ((field.fieldInfo as Types.Helper.IListFormUserFieldInfo).multi) {
                        let values: Array<Fabric.Types.IDropdownOption> = fieldValue || [];
                        fieldValue = { results: [] };

                        // Parse the options
                        for (let j = 0; j < values.length; j++) {
                            let userValue = values[j] as Types.SP.IPeoplePickerUser;
                            if (userValue && userValue.EntityData) {
                                // Ensure the user or group id exists
                                if (userValue.EntityData.SPGroupID || userValue.EntityData.SPUserID) {
                                    // Update the field value
                                    fieldValue.results.push(userValue.EntityData.SPUserID || userValue.EntityData.SPGroupID);
                                } else {
                                    // Add the unknown user account
                                    unknownUsers[fieldName] = unknownUsers[fieldName] || [];
                                    unknownUsers[fieldName].push(userValue.Key);
                                }
                            }
                        }
                    } else {
                        let userValue: Types.SP.IPeoplePickerUser = fieldValue ? fieldValue[0] : null;
                        if (userValue && userValue.EntityData) {
                            // Ensure the user or group id exists
                            if (userValue.EntityData.SPGroupID || userValue.EntityData.SPUserID) {
                                // Update the field value
                                fieldValue = userValue.EntityData.SPUserID || userValue.EntityData.SPGroupID;
                            } else {
                                // Add the unknown user account
                                unknownUsers[fieldName] = unknownUsers[fieldName] || [];
                                unknownUsers[fieldName].push(userValue.Key);
                            }
                        } else {
                            // Clear the field value
                            fieldValue = null;
                        }
                    }
                    break;

                // MMS
                default:
                    if (field.fieldInfo.typeAsString.startsWith("TaxonomyFieldType")) {
                        // See if this is a multi field
                        if (field.fieldInfo.typeAsString.endsWith("Multi")) {
                            // Update the field name to the value field
                            fieldName = (field.fieldInfo as Types.Helper.IListFormMMSFieldInfo).valueField.InternalName;

                            // Parse the field values
                            let fieldValues: Array<Fabric.Types.IDropdownOption> = fieldValue || [];
                            fieldValue = [];
                            for (let j = 0; j < fieldValues.length; j++) {
                                let termInfo = fieldValues[j];

                                // Add the field value
                                fieldValue.push(-1 + ";#" + termInfo.text + "|" + termInfo.value);
                            }

                            // Set the field value
                            fieldValue = fieldValue.join(";#");
                        } else {
                            // Update the value
                            fieldValue = fieldValue && fieldValue.length > 0 ? {
                                __metadata: { type: "SP.Taxonomy.TaxonomyFieldValue" },
                                Label: fieldValue[0].text,
                                TermGuid: fieldValue[0].value,
                                WssId: -1
                            } : fieldValue;
                        }
                    }
                    break;
            }

            // Set the field value
            formValues[fieldName] = fieldValue;
        }

        // Return the form values
        return { formValues, unknownUsers };
    }

    // Return the form
    return {
        // Returns the fields
        getFields: () => { return fields; },

        // Returns the field values
        getValues: () => {
            // Return a promise
            return new Promise((resolve, reject) => {
                let { formValues, unknownUsers } = getFormValues();
                let web = Web();

                // Parse the field names
                for (let fieldName in unknownUsers) {
                    // Parse the user accounts
                    for (let i = 0; i < unknownUsers[fieldName].length; i++) {
                        // Ensure this user account exists
                        web.ensureUser(unknownUsers[fieldName][i]).execute(true);
                    }
                }

                // Wait for the requests to complete
                web.done((...args) => {
                    // Parse the field names
                    for (let fieldName in unknownUsers) {
                        // Parse the user accounts
                        for (let i = 0; i < unknownUsers[fieldName].length; i++) {
                            let userLogin = unknownUsers[fieldName][i];

                            // Parse the responses
                            for (let j = 0; j < args.length; j++) {
                                let user = args[j] as Types.SP.IUserResult;

                                // See if this is the user
                                if (user.LoginName == userLogin) {
                                    // See if this is a multi-user value
                                    if (formValues[fieldName].results != null) {
                                        // Set the user account
                                        formValues[fieldName].push(user.Id);
                                    } else {
                                        // Set the user account
                                        formValues[fieldName] = user.Id;
                                    }
                                }
                            }
                        }
                    }

                    // Resolve the promise
                    resolve(formValues);
                });
            });
        },

        // Flag to determine if the form is valid
        isValid: (): boolean => {
            let { formValues } = getFormValues();

            // Parse the fields
            for (let i = 0; i < fields.length; i++) {
                let field = fields[i];

                // See if this field is required
                if (field.fieldInfo.required) {
                    // Ensure a value exists
                    if (formValues[field.fieldInfo.name]) { continue; }

                    // Form is invalid
                    return false;
                }
            }

            // Form is valid
            return true;
        }
    }
};

// Method to render the form template
ListForm.renderFormTemplate = (props: IListFormDisplayProps) => {
    // Clear the element
    props.el.innerHTML = "";

    // See if the field order has been specified
    if (props.includeFields) {
        // Parse the fields to include
        for (let i = 0; i < props.includeFields.length; i++) {
            // Parse the fields
            for (let fieldName in props.info.fields) {
                // See if we are including this field
                if (props.includeFields[i] == fieldName) {
                    // Append the field to the form
                    props.el.innerHTML += "<div data-field='" + fieldName + "'></div>";
                    break;
                }
            }
        }
    }
    // Else, see if fields have been specified to be excluded
    else if (props.excludeFields) {
        // Parse the fields
        for (let fieldName in props.info.fields) {
            let excludeField = props.includeFields ? true : false;

            // Parse the fields
            for (let i = 0; i < props.excludeFields.length; i++) {
                // See if we are excluding this field
                if (props.excludeFields[i] == fieldName) {
                    // Set the flag
                    excludeField = true;
                    break;
                }
            }

            // See if we are excluding the field
            if (excludeField) { continue; }

            // Append the field to the form
            props.el.innerHTML += "<div data-field='" + fieldName + "'></div>";
        }
    } else {
        // Parse the fields
        for (let fieldName in props.info.fields) {
            // Append the field to the form
            props.el.innerHTML += "<div data-field='" + fieldName + "'></div>";
        }
    }
};