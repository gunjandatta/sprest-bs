import { Helper, SPTypes, Types } from "gd-sprest";
import { Components } from "../core";
import { IField, IFieldProps, IFieldValue, IFormControlLookupProps, IFormControlUrlProps, IFieldImageInfo, IFieldImageValue } from "./types";
import { DateTimeControlType } from "../datetime";
import { IFormControlPropsDateTime } from "../datetime/types";
import { PeoplePickerControlType } from "../peoplePicker";
import { IFormControlPropsPeoplePicker } from "../peoplePicker/types";
import { RichTextBoxControlType, RichTextBoxTypes } from "../richTextBox";
import { IFormControlPropsRichTextBox } from "../richTextBox/types";

/**
 * Field
 */
export const Field = (props: IFieldProps): IField => {
    let control: Components.IFormControl;
    let lookupFieldInfo: Helper.IListFormLookupFieldInfo = null;
    let mmsFieldInfo: Helper.IListFormMMSFieldInfo = null;

    // Method to get the choice options
    let getChoiceItems = (isCheckbox: boolean, field: Types.SP.FieldMultiChoice, selectedValues) => {
        let items: Array<Components.ICheckboxGroupItem | Components.IDropdownItem> = [];

        // Update the selected values
        selectedValues = selectedValues && selectedValues.results ? selectedValues.results : [selectedValues];

        // Parse the choices
        for (let i = 0; i < field.Choices.results.length; i++) {
            let choice = field.Choices.results[i];
            let isSelected = false;

            // Determine if this choice is selected
            for (let j = 0; j < selectedValues.length; j++) {
                // See if this choice is selected
                if (choice == selectedValues[j]) {
                    // Set the flag and break from the loop
                    isSelected = true;
                    break;
                }
            }

            // See if this is a checkbox
            if (isCheckbox) {
                // Add the item
                items.push({
                    isSelected,
                    label: choice
                } as Components.ICheckboxGroupItem);
            } else {
                // Add the item
                items.push({
                    isSelected,
                    label: choice,
                    text: choice,
                    value: choice
                } as Components.IDropdownItem);
            }
        }

        // Parse the selected values
        for (let i = 0; i < selectedValues.length; i++) {
            let existsFl = false;
            let selectedValue = selectedValues[i];

            // Parse the items
            for (let j = 0; j < items.length; j++) {
                let itemValue = isCheckbox ? items[j]["label"] : items[j]["value"];

                // See if the value exists
                if (selectedValue == itemValue) {
                    // Set the flag
                    existsFl = true;
                    break;
                }
            }

            // Ensure a value exists and see if this was a fill-in choice
            if (!existsFl && selectedValue) {
                // See if this is a checkbox
                if (isCheckbox) {
                    // Add the item
                    items.push({
                        isSelected: true,
                        label: selectedValue
                    } as Components.ICheckboxGroupItem);
                } else {
                    // Add the item
                    items.push({
                        isSelected: true,
                        label: selectedValue,
                        text: selectedValue,
                        value: selectedValue
                    } as Components.IDropdownItem);
                }
            }
        }

        // See if this is a dropdown and no selected values exists, and this is a required field
        if (!isCheckbox && items.length > 0 && selectedValues.length == 0 && field.Required) {
            // Select the first item
            items[0].isSelected = true;
        }

        // Return the items
        return items;
    }

    // Method to get the file extension
    let getFileExtension = (fileName: string = "") => {
        let extension = fileName.split('.');
        return extension[extension.length - 1].toLowerCase();
    }

    // Method to generate the lookup dropdown items
    let getLookupItems = (field: Types.SP.FieldLookup, lookupItems: Array<Types.SP.IListItemQuery>, selectedValues) => {
        let items: Array<Components.IDropdownItem> = [];

        // Update the selected values
        selectedValues = selectedValues && selectedValues.results ? selectedValues.results : [selectedValues];

        // Parse the lookup items
        for (let i = 0; i < lookupItems.length; i++) {
            let item = lookupItems[i];
            let isSelected = false;

            // Determine if this lookup is selected
            for (let j = 0; j < selectedValues.length; j++) {
                let id = selectedValues[j] && selectedValues[j].Id ? selectedValues[j].Id : selectedValues[j];

                // See if this choice is selected
                if (item.Id == id) {
                    // Set the flag and break from the loop
                    isSelected = true;
                    break;
                }
            }

            // Add the item
            items.push({
                data: item,
                isSelected,
                text: item[field.LookupField],
                value: item.Id.toString()
            });
        }

        // See if no selected values exists, and this is a required field
        if (items.length > 0 && selectedValues.length == 0 && field.Required) {
            // Select the first item
            items[0].isSelected = true;
        }

        // Return the items
        return items;
    }

    // Method to get the mms dropdown items
    let getMMSItems = (term: Helper.ITerm, selectedValues = [], isRoot = true) => {
        let items: Array<Components.IDropdownItem> = [];

        // See if information exists
        if (term.info && !isRoot) {
            let isSelected = false;

            // Parse the selected values
            for (let i = 0; i < selectedValues.length; i++) {
                // See if this item is selected
                if (selectedValues[i] == term.info.id) {
                    isSelected = true;
                    break;
                }
            }

            // Add the heading
            items.push({
                data: term,
                isSelected,
                text: term.info.name,
                value: term.info.id
            });
        }

        // Parse the terms
        for (let termName in term) {
            let child = term[termName];

            // Skip the info and parent properties
            if (termName == "info" || termName == "parent") { continue; }

            // Get the child items
            let childItems = getMMSItems(child, selectedValues, false);

            // Add the item
            items = items.concat(childItems);
        }

        // See if no selected values exists, and this is a required field
        if (items.length > 0 && selectedValues.length == 0 && isRequired) {
            // Select the first item
            items[0].isSelected = true;
        }

        // Return the items
        return items;
    }

    // Set the properties based on the field link
    let fieldLink = props.listInfo.fieldLinks ? props.listInfo.fieldLinks[props.field.InternalName] : null;
    let isReadonly = fieldLink && typeof (fieldLink.ReadOnly) === "boolean" ? fieldLink.ReadOnly : props.field.ReadOnlyField;
    let isRequired = fieldLink && typeof (fieldLink.Required) === "boolean" ? fieldLink.Required : props.field.Required;

    // See if this is an internal field
    if (props.field.CanBeDeleted == false) {
        // Override the property based on the field property
        isReadonly = isReadonly || props.field.ReadOnlyField;
    }

    // Set the default properties for the control
    let controlProps: Components.IFormControlProps = {
        description: props.field.Description,
        errorMessage: props.errorMessage,
        id: props.field.InternalName,
        isReadonly,
        label: (isRequired ? "* " : "") + props.field.Title,
        name: props.field.InternalName,
        onControlRendering: control => {
            // Execute the event
            return props.onControlRendering ? props.onControlRendering(control, props.field) : null;
        },
        onControlRendered: formControl => {
            // Save the control
            control = formControl;

            // Execute the event
            return props.onControlRendered ? props.onControlRendered(control, props.field) : null;
        },
        required: isRequired,
        type: Components.FormControlTypes.TextField,
        value: props.value
    };

    // Define a base validation method
    let baseValidation: (control: Components.IFormControl, result: Components.IFormControlValidationResult) => Components.IFormControlValidationResult = null;

    // See if this is a new form, a default value exists and no value has been defined
    if (props.controlMode == SPTypes.ControlMode.New && props.field.DefaultValue && props.value == null) {
        // Set the default value
        controlProps.value = props.field.DefaultValue;
    }

    // Set the type
    let onControlRendered = null;
    let onControlRendering = null;
    switch (props.field.FieldTypeKind) {
        // Boolean
        case SPTypes.FieldType.Boolean:
            // Set the type
            controlProps.type = Components.FormControlTypes.Checkbox;

            // Create the item
            (controlProps as Components.IFormControlPropsCheckbox).items = [{ label: controlProps.label }]

            // Clear the label
            controlProps.label = "";
            break;

        // Choice
        case SPTypes.FieldType.Choice:
            let allowFillIn = (props.field as Types.SP.FieldChoice).FillInChoice;
            let displayRadioButtons = props.field.SchemaXml.indexOf('Format="RadioButtons"') > 0 ? true : false;

            // See if we are displaying radio buttons
            if (displayRadioButtons) {
                // Set the type
                controlProps.type = Components.FormControlTypes.Switch;
            } else {
                // Set the type
                controlProps.type = Components.FormControlTypes.Dropdown;
            }

            // Get the items
            let items = getChoiceItems(displayRadioButtons, props.field as any, props.value);

            // Add a blank entry if this is a dropdown
            if (!displayRadioButtons) {
                items = [{
                    text: "",
                    value: null
                } as any].concat(items);
            }

            // See if we are allowing custom values
            if (allowFillIn) {
                // Set the base validation
                baseValidation = (ctrl, result) => {
                    // Update the value
                    result.value = result.value && typeof (result.value.text) === "string" ? result.value.value : result.value;

                    // See if a fill-in choice exists
                    let fillInChoice = tbFillIn.getValue();
                    if (fillInChoice) {
                        // Override the value
                        result.value = fillInChoice;
                    }

                    // See if this control is required
                    if (ctrl.props.required) {
                        // Update the flag
                        result.isValid = result.value ? true : false;
                    }

                    // Return the result
                    return result;
                }

                // Set the rendered event
                let tbFillIn: Components.IInputGroup = null;
                onControlRendered = controlProps.onControlRendered;
                controlProps.onControlRendered = (formControl) => {
                    // Append a textbox
                    tbFillIn = Components.InputGroup({
                        el: formControl.el,
                        className: "choice-fill-in",
                        placeholder: "Fill In Choice"
                    });

                    // Call the event
                    onControlRendered ? onControlRendered(formControl) : null;
                }
            }

            // Set the items
            (controlProps as Components.IFormControlPropsDropdown).items = items;

            // Set the base validation
            baseValidation = (ctrl, result) => {
                // See if a selected item exists and the field is required
                if (result.value && ctrl.props.required) {
                    // See if this is a dropdown
                    if (ctrl.props.type == Components.FormControlTypes.Dropdown) {
                        let ddlItem: Components.IDropdownItem = result.value;

                        // See if the text and value don't exist
                        if (ddlItem.value || ddlItem.text ? false : true) {
                            // Set the flag
                            result.isValid = false;
                        }
                    }
                    // Else, it's a switch
                    else {
                        let cbItem: Components.ICheckboxGroupItem = result.value;

                        // See if a value doesn't exist
                        if (cbItem.label ? false : true) {
                            // Set the flag
                            result.isValid = false;
                        }
                    }
                }

                // Return the result
                return result;
            }
            break;

        // Currency Field
        case SPTypes.FieldType.Currency:
            // Set the type
            controlProps.type = Components.FormControlTypes.TextField;

            // Set the rendered event
            onControlRendering = controlProps.onControlRendering;
            controlProps.onControlRendering = (tbProps: Components.IFormControlPropsTextField) => {
                // See if the currency exists in the field
                let shortName = props.field.TypeShortDescription;
                let matches = /\(([^)]+)\)/.exec(shortName);
                let symbol = matches.length > 0 ? matches[1] : "$";

                // Set the text
                tbProps.prependedLabel = symbol;

                // Call the event
                onControlRendering ? onControlRendering(tbProps) : null;

                // Set the validation event
                // Validate the extension
                baseValidation = (ctrl, results) => {
                    // Ensure a value exists
                    if (results.value) {
                        // Ensure it's a valid currency value
                        results.isValid = /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/.test(results.value)
                        results.invalidMessage = "The currency format is not a valid.";
                    }

                    // Return the results
                    return results;
                }
            }
            break;

        // Date/Time
        case SPTypes.FieldType.DateTime:
            // Set the time flag
            let showTime = (props.field as Types.SP.FieldDateTime).DisplayFormat == SPTypes.DateFormat.DateTime;
            (controlProps as IFormControlPropsDateTime).showTime = showTime;

            // Set the type
            controlProps.type = DateTimeControlType;

            // See if there is a formula and this is a new form
            let dtValue = (props.field.DefaultFormula || props.field.DefaultValue || "").toLowerCase();
            if (dtValue && props.controlMode == SPTypes.ControlMode.New) {
                let idx = dtValue.indexOf("today");

                // See if the date is a formula
                if (idx >= 0) {
                    let dtNow = new Date(Date.now());

                    // See if we are adding days
                    let daysIdx = dtValue.indexOf("+", idx);
                    if (daysIdx > 0) {
                        // Get the number of days to add
                        let days = parseInt(dtValue.substr(daysIdx + 1));
                        if (days > 0) {
                            // Add the days
                            dtNow.setDate(dtNow.getDate() + days);
                        }
                    }

                    // See if we are subtracting days
                    daysIdx = dtValue.indexOf("-", idx);
                    if (daysIdx > 0) {
                        // Get the number of days to add
                        let days = parseInt(dtValue.substr(daysIdx + 1));
                        if (days > 0) {
                            // Add the days
                            dtNow.setDate(dtNow.getDate() - days);
                        }
                    }

                    // Set the value
                    controlProps.value = dtNow;
                } else {
                    // Set the value
                    controlProps.value = new Date(dtValue);
                }
            }
            break;

        // Image
        case SPTypes.FieldType.Image:
            let fileInfo: Helper.IListFormAttachmentInfo = null;
            let imageValue = controlProps.value;

            // Set the type
            controlProps.type = Components.FormControlTypes.TextField;
            (controlProps as Components.IFormControlPropsTextField).placeholder = "Add an image";
            (controlProps as Components.IFormControlPropsTextField).isDisabled = true;

            // Update the value
            if (controlProps.value) {
                // Update the value to only display the file name
                try {
                    let imageProps: IFieldImageValue = JSON.parse(controlProps.value);
                    controlProps.value = imageProps.fileName;
                } catch { }
            }

            // Validate the extension
            baseValidation = (ctrl, results) => {
                // See if we are uploading a new file
                if (fileInfo) {
                    // Ensure it's an image
                    let info = fileInfo.name.split('.');
                    let fileExt = info[info.length - 1].toLowerCase();
                    if (["tiff", "pjp", "jfif", "bmp", "gif", "svg", "png", "xbm", "dib", "jxl",
                        "jpeg", "svgz", "jpg", "webp", "ico", "tif", "pjpeg", "avif"].indexOf(fileExt) < 0) {
                        // Set the flag
                        results.isValid = false;
                        results.invalidMessage = "The file must be an image.";
                    }
                }
                // Else, see if a value doesn't exist
                else if (results.value == null) {
                    // Set the flag based on if it's required
                    results.isValid = ctrl.props.required ? false : results.isValid;
                }

                // Return the results
                return results;
            }

            onControlRendered = controlProps.onControlRendered;
            controlProps.onControlRendered = (ctrl) => {
                // Append the edit button
                Components.Button({
                    el: ctrl.textbox.el,
                    type: Components.ButtonTypes.OutlineSecondary,
                    text: "Edit",
                    onClick: () => {
                        // Show a file loader
                        Helper.ListForm.showFileDialog().then(file => {
                            // Save the file info
                            fileInfo = file;
                            (fileInfo as IFieldImageInfo).fieldId = props.field.Id;
                            (fileInfo as IFieldImageInfo).fieldName = props.field.InternalName;

                            // Set the value to the file name
                            ctrl.textbox.setValue(file.name);
                        });
                    }
                });

                // Append the clear button
                Components.Button({
                    el: ctrl.textbox.el,
                    type: Components.ButtonTypes.OutlineSecondary,
                    text: "Clear",
                    onClick: () => {
                        // Clear the value
                        ctrl.textbox.setValue("");
                        fileInfo = null;
                        imageValue = null;
                    }
                });

                // Call the rendered event
                onControlRendered ? onControlRendered(ctrl) : null;
            }

            // Set the get value event
            controlProps.onGetValue = () => {
                // Return the file information
                return fileInfo || imageValue;
            }
            break;

        // Lookup
        case SPTypes.FieldType.Lookup:
            // Default the lookup field props will determine the default type
            controlProps.type = (props.field as Types.SP.FieldLookup).AllowMultipleValues ? Components.FormControlTypes.MultiDropdown : Components.FormControlTypes.Dropdown;

            // See if this field is readonly and a value exists
            if (isReadonly) {
                // Update the value
                controlProps.type = Components.FormControlTypes.Readonly;

                // Ensure a value exists
                if (props.value) {
                    // Set the rendered event
                    onControlRendered = controlProps.onControlRendered;
                    controlProps.onControlRendered = (formControl) => {
                        // Set the class name
                        control.el.classList.add("form-control");
                        control.el.style.backgroundColor = "#e9ecef";

                        // Override the html rendered
                        control.el.innerHTML = props.listInfo.fieldValuesAsHtml[props.field.InternalName];
                    }
                }
            } else {
                // Set the rendering event
                onControlRendering = controlProps.onControlRendering;
                controlProps.onControlRendering = newProps => {
                    // Update the control properties
                    controlProps = newProps;

                    // Display a loading message
                    controlProps.loadingMessage = "Loading the Lookup Data";

                    // Return a promise
                    return new Promise((resolve, reject) => {
                        // Load the field information
                        Helper.ListFormField.create({
                            field: props.field as any,
                            listName: props.listInfo.list.Title,
                            name: props.field.InternalName,
                            webUrl: props.listInfo.webUrl
                        }).then(
                            // Success
                            (fieldInfo: Helper.IListFormLookupFieldInfo) => {
                                // Save the field information
                                lookupFieldInfo = fieldInfo;

                                // Set the lookup filter
                                lookupFieldInfo.lookupFilter = props.lookupFilter;

                                // Update the multi property
                                (controlProps as Helper.IListFormLookupFieldInfo).multi = lookupFieldInfo.multi;

                                // Get the drop down information
                                Helper.ListFormField.loadLookupData(lookupFieldInfo, 500).then(
                                    // Success
                                    items => {
                                        // Get the dropdown items
                                        let ddlItems = getLookupItems(props.field as any, items, props.value);

                                        // See if this is not a required field and not a multi-select
                                        if (!isRequired && !lookupFieldInfo.multi) {
                                            // Add a blank entry
                                            ddlItems = [{
                                                text: "",
                                                value: null
                                            } as any].concat(ddlItems);
                                        }

                                        // Set the items
                                        (controlProps as Components.IFormControlPropsDropdown).items = ddlItems;

                                        // Clear the element
                                        controlProps.el ? controlProps.el.innerHTML = "" : null;

                                        // Clear the value, since the getLookupItems method takes care of this for us
                                        controlProps.value = null;

                                        // Call the event
                                        let returnVal = onControlRendering ? onControlRendering(controlProps) : null;
                                        if (returnVal && returnVal.then) {
                                            // Wait for the promise to complete
                                            returnVal.then(props => {
                                                // Resolve the promise
                                                resolve(props || controlProps);
                                            })
                                        } else {
                                            // Resolve the promise
                                            resolve(controlProps);
                                        }
                                    },
                                    // Error
                                    msg => {
                                        // Set the error message
                                        let errorMessage = "Error loading the lookup field values for '" + props.field.InternalName + "'.";

                                        // Display an error message
                                        Components.Alert({
                                            el: controlProps.el,
                                            content: errorMessage,
                                            type: Components.AlertTypes.Danger
                                        });

                                        // Call the error event
                                        props.onError ? props.onError(errorMessage) : null;
                                    }
                                );
                            },
                            // Error
                            msg => {
                                // Set the error message
                                let errorMessage = "Error loading the field information for field '" + props.field.InternalName + "'.";

                                // Display an error message
                                controlProps.el.innerHTML = "";
                                Components.Alert({
                                    el: controlProps.el,
                                    content: "Error loading the lookup field information.",
                                    type: Components.AlertTypes.Danger
                                });

                                // Call the error event
                                props.onError ? props.onError(errorMessage) : null;

                                // Reject the request
                                reject(msg);
                            }
                        );
                    });
                };
            }
            break;

        // Multi-Choice
        case SPTypes.FieldType.MultiChoice:
            let allowFillInMulti = (props.field as Types.SP.FieldChoice).FillInChoice;
            let isChoice = props.field.SchemaXml.indexOf('Format="RadioButtons"') > 0 ? true : false;

            // Set the type
            controlProps.type = isChoice ? Components.FormControlTypes.MultiSwitch : Components.FormControlTypes.MultiDropdown;

            // Update the value
            controlProps.value = (props.value ? props.value.results : null) || props.value;

            // Set the items
            (controlProps as Components.IFormControlPropsDropdown).items = getChoiceItems(isChoice, props.field as any, props.value);

            // See if we are allowing custom values
            if (allowFillInMulti) {
                // Set the base validation
                baseValidation = (ctrl, result) => {
                    // See if a fill-in choice exists
                    let fillInChoice = tbFillIn.getValue();
                    if (fillInChoice) {
                        // Append the value
                        result.value.push({
                            isSelected: true,
                            label: fillInChoice,
                            text: fillInChoice,
                            value: fillInChoice
                        });
                    }

                    // See if this control is required
                    if (ctrl.props.required) {
                        // Update the flag
                        result.isValid = result.value.length ? true : false;
                    }

                    // Return the result
                    return result;
                }

                // Set the rendered event
                let tbFillIn: Components.IInputGroup = null;
                onControlRendered = controlProps.onControlRendered;
                controlProps.onControlRendered = (formControl) => {
                    // Append a textbox
                    tbFillIn = Components.InputGroup({
                        el: formControl.el,
                        className: "choice-fill-in",
                        placeholder: "Fill In Choice"
                    });

                    // Call the event
                    onControlRendered ? onControlRendered(formControl) : null;
                }
            }
            break;

        // Note
        case SPTypes.FieldType.Note:
            let noteField = props.field as Types.SP.FieldMultiLineText;

            // See if this is plain text
            if (noteField.RichText) {
                let rtbProps = controlProps as IFormControlPropsRichTextBox;
                let fullToolbar = noteField.SchemaXml.match(/RichTextMode="FullHtml"/i) ? true : false;

                // Set the properties
                rtbProps.type = RichTextBoxControlType;
                rtbProps.toolbarType = fullToolbar ? RichTextBoxTypes.Full : RichTextBoxTypes.Basic;
            } else {
                // Set the properties
                controlProps.type = Components.FormControlTypes.TextArea;
                (controlProps as Components.IFormControlPropsTextField).rows = (props.field as Types.SP.FieldMultiLineText).NumberOfLines;
            }
            break;

        // Number Field
        case SPTypes.FieldType.Number:
            let numberField = props.field as Types.SP.FieldNumber;
            let numberProps = controlProps as Components.IFormControlPropsNumberField;

            // Set the default value
            numberProps.value = numberProps.value == null ? numberField.DefaultValue : numberProps.value;

            // See if this is a percentage
            let isPercent = numberField.ShowAsPercentage;
            if (isPercent == null) {
                // Set the value from the schema (2013 environments)
                isPercent = numberField.SchemaXml.toLowerCase().indexOf('percentage="true"') > 0;
            }
            if (isPercent) {
                // Set the type
                numberProps.type = Components.FormControlTypes.Range;

                // Default the max
                numberProps.max = numberField.MaximumValue == 1 || numberField.MaximumValue == Number.MAX_VALUE ? 100 : numberField.MaximumValue;

                // Set the min value
                numberProps.min = numberField.MinimumValue == -1.7976931348623157e+308 ? 0 : numberField.MinimumValue;

                // Set the value
                numberProps.value = numberProps.value == null || numberProps.value == Number.MIN_VALUE ? 0 : numberProps.value;
                numberProps.value = numberProps.value * (numberProps.max == 100 && numberProps.value <= 1 ? 100 : 1);
            }
            // Else, see if the min/max values are defined
            else if ((typeof (numberField.MaximumValue) == "number" && numberField.MaximumValue != Number.MAX_VALUE) && (typeof (numberField.MinimumValue) == "number" && numberField.MinimumValue != Number.MIN_VALUE)) {
                // Update the properties to display a range
                numberProps.type = Components.FormControlTypes.Range;
                numberProps.max = numberField.MaximumValue;
                numberProps.min = numberField.MinimumValue;
                numberProps.value = typeof (numberProps.value) == "number" ? numberProps.value : numberProps.min;

                // Set validation
                if (numberField.MinimumValue || numberField.MaximumValue) {
                    // Add validation
                    baseValidation = (control, result) => {
                        // Ensure the value is a number
                        if (/^[0-9]*$/.test(result.value) == false) {
                            // Update the validation and return it
                            result.isValid = false;
                            result.invalidMessage = "The value must be a number.";
                            return result;
                        }

                        // Validate the min value
                        if (numberField.MinimumValue && result.value < numberField.MinimumValue) {
                            // Update the validation and return it
                            result.isValid = false;
                            result.invalidMessage = "The value must be greater than or equal to " + numberField.MinimumValue;
                            return result;
                        }

                        // Validate the max value
                        if (numberField.MaximumValue && result.value > numberField.MaximumValue) {
                            // Update the validation and return it
                            result.isValid = false;
                            result.invalidMessage = "The value must be less than or equal to " + numberField.MaximumValue;
                            return result;
                        }

                        // Valid
                        result.isValid = true;

                        // Return the result
                        return result;
                    }
                }
            }
            else {
                // Set the type
                numberProps.type = Components.FormControlTypes.TextField;
            }
            break;

        // URL
        case SPTypes.FieldType.URL:
            let desc: Components.IFormControl = null;
            let url: Components.IFormControl = null;
            let value = props.value as Types.SP.FieldUrlValue;

            // See if a value exists
            if (props.value) {
                // Update the value
                controlProps.value = (props.value as Types.SP.FieldUrlValue).Url;
            }

            // Set the render event
            onControlRendered = controlProps.onControlRendered;
            controlProps.onControlRendered = (formControl) => {
                // Save the control
                control = formControl;

                // Clear the element
                control.el.innerHTML = "";

                // See if we are rendering the description
                let showDesc = (controlProps as IFormControlUrlProps).showDescription;
                showDesc = typeof (showDesc) === "boolean" ? showDesc : true;
                if (showDesc) {
                    // Render the description
                    desc = Components.FormControl({
                        className: "mb-1",
                        el: control.el,
                        placeholder: "Description",
                        type: Components.FormControlTypes.TextField,
                        value: value ? value.Description : null
                    } as Components.IFormControlPropsTextField);
                }

                // Render the url
                url = Components.FormControl({
                    el: control.el,
                    placeholder: "Url",
                    type: Components.FormControlTypes.TextField,
                    value: value ? value.Url : null
                } as Components.IFormControlPropsTextField);

                // Set the get value event
                control.props.onGetValue = () => {
                    // Return the value
                    return {
                        Description: desc ? desc.getValue() : url.getValue(),
                        Url: url.getValue()
                    }
                }

                // Call the event
                onControlRendered ? onControlRendered(formControl) : null;
            }

            // Set the validate event
            baseValidation = (control, result) => {
                let descValid, urlValid = false;

                // Get the form control elements
                let elFormControl = control.el.querySelectorAll(".form-control");

                // See if both the description and url are displayed
                let elDesc = null;
                let elUrl = null;
                if (elFormControl.length > 1) {
                    // Set the elements
                    elDesc = elFormControl[0];
                    elUrl = elFormControl[1];
                } else {
                    // Set the elements
                    elUrl = elFormControl[0];

                    // Set the flag
                    descValid = true;
                }

                // See if the description exists
                if (elDesc) {
                    // Clear the classes
                    elDesc.classList.remove("is-invalid");
                    elDesc.classList.remove("is-valid");

                    // Set the flag
                    descValid = control.props.required ? (desc.getValue() ? true : false) : true;

                    // Set the class
                    elDesc.classList.add(descValid ? "is-valid" : "is-invalid");
                }

                // See if the url exists
                if (elUrl) {
                    // Clear the classes
                    elUrl.classList.remove("is-invalid");
                    elUrl.classList.remove("is-valid");

                    // Set the flag
                    urlValid = control.props.required ? (url.getValue() ? true : false) : true;

                    // Set the class
                    elUrl.classList.add(urlValid ? "is-valid" : "is-invalid");
                }

                // Set the validation falg
                result.isValid = descValid && urlValid;

                // Return the result
                return result;
            }
            break;

        // User
        case SPTypes.FieldType.User:
            // Set the type
            controlProps.type = isReadonly ? Components.FormControlTypes.Readonly : PeoplePickerControlType;

            // Update the properties, based on the field settings
            (controlProps as IFormControlPropsPeoplePicker).allowGroups = (props.field as Types.SP.FieldUser).SelectionGroup == SPTypes.FieldUserSelectionType.PeopleAndGroups;
            (controlProps as IFormControlPropsPeoplePicker).groupId = (props.field as Types.SP.FieldUser).SelectionGroup;
            (controlProps as IFormControlPropsPeoplePicker).multi = (props.field as Types.SP.FieldUser).AllowMultipleValues;

            // Set the rendered event
            onControlRendered = controlProps.onControlRendered;
            controlProps.onControlRendered = (formControl) => {
                // Save the control
                control = formControl;

                // See if this field is readonly and a value exists
                if (props.value && isReadonly) {
                    // Set the class name
                    control.el.classList.add("form-control");
                    control.el.style.backgroundColor = "#e9ecef";

                    // Override the html rendered
                    control.el.innerHTML = props.listInfo.fieldValuesAsHtml[props.field.InternalName];
                }

                // Call the event
                onControlRendered ? onControlRendered(formControl) : null;
            }
            break;
    }

    // See if this is the document name field
    if (props.field.InternalName == "FileLeafRef") {
        // Set base validation
        baseValidation = (control, result) => {
            let value = result.value;

            // Ensure the value exists
            result.isValid = value ? true : false;
            if (result.isValid) {
                // See if it ends w/ a .
                if (value[value.length - 1] == '.') {
                    // Update the validation
                    result.isValid = false;
                    result.invalidMessage = "The value cannot end with a '.' character.";
                }
                // Else, see if it contains invalid characters
                else if (/[~"\#\%\&\*\:\<\>\?\/\\\{\|\}"]/.test(value) || value.indexOf('\\') >= 0) {
                    // Update the validation
                    result.isValid = false;
                    result.invalidMessage = "The value cannot contain the following characters: ~ \" # % & * : < > ? / \\ { | }";
                }
                // Else, see if we are changing the extension
                else if (control.props.value) {
                    // Get the file extensions
                    let origExtension = getFileExtension(control.props.value);
                    let newExtension = getFileExtension(value);

                    // Update the validation
                    result.isValid = origExtension == newExtension;
                    result.invalidMessage = "The file extension cannot be changed. It must end with '." + origExtension + "'";
                }
            }

            // Return the validation result
            return result;
        }
    }

    // See if this is a taxonomy field
    if (/^TaxonomyFieldType/.test(props.field.TypeAsString)) {
        // Set the type
        controlProps.type = Components.FormControlTypes.Dropdown;

        // Set a render event
        onControlRendering = controlProps.onControlRendering;
        controlProps.onControlRendering = newProps => {
            // Update the control properties
            controlProps = newProps;

            // Return a promise
            return new Promise((resolve, reject) => {
                // Display a loading message
                controlProps.loadingMessage = "Loading the MMS Data";

                // Load the field information
                Helper.ListFormField.create({
                    field: props.field,
                    listName: props.listInfo.list.Title,
                    name: props.field.InternalName,
                    webUrl: props.listInfo.webUrl
                }).then(
                    // Success
                    (fieldInfo: Helper.IListFormMMSFieldInfo) => {
                        // Save the field information
                        mmsFieldInfo = fieldInfo;

                        // Set the type
                        controlProps.type = mmsFieldInfo.multi ? Components.FormControlTypes.MultiDropdown : Components.FormControlTypes.Dropdown;

                        // Load the value field
                        Helper.ListFormField.loadMMSValueField(mmsFieldInfo).then(
                            // Success
                            valueField => {
                                // Set the value field
                                mmsFieldInfo.valueField = valueField;

                                // See if this is a new form
                                if (props.controlMode == SPTypes.ControlMode.New) {
                                    let fieldValue = [];

                                    // Get the default values
                                    let values = (props.field.DefaultValue || "").split(";#")
                                    for (let i = 0; i < values.length; i++) {
                                        let value = values[i].split("|");
                                        if (value.length == 2) {
                                            // Add the term id
                                            fieldValue.push(value[1]);
                                        }
                                    }

                                    // Update the field value
                                    controlProps.value = fieldValue;
                                } else {
                                    let fieldValue = props.value;

                                    // Get the field value
                                    let values = fieldValue && fieldValue.results ? fieldValue.results : [fieldValue];

                                    // Clear the field values
                                    fieldValue = [];

                                    // Parse the values
                                    for (let i = 0; i < values.length; i++) {
                                        // Ensure the value exists
                                        if (values[i] && values[i].TermGuid) {
                                            // Add the value
                                            fieldValue.push(values[i].TermGuid);
                                        }
                                    }

                                    // Update the field value
                                    controlProps.value = fieldValue;
                                }

                                // Load the terms
                                Helper.ListFormField.loadMMSData(mmsFieldInfo).then(
                                    // Success
                                    terms => {
                                        // Get the items
                                        let items = getMMSItems(Helper.Taxonomy.toObject(terms), controlProps.value);

                                        // See if this is not a required field and not a multi-select
                                        if (!isRequired && !mmsFieldInfo.multi) {
                                            // Add a blank entry
                                            items = [{
                                                text: "",
                                                value: null
                                            } as any].concat(items);
                                        }

                                        // Set the items
                                        (controlProps as Components.IFormControlPropsDropdown).items = items;

                                        // Clear the element
                                        controlProps.el ? controlProps.el.innerHTML = "" : null;

                                        // Call the event
                                        let returnVal = onControlRendering ? onControlRendering(controlProps) : null;
                                        if (returnVal && returnVal.then) {
                                            // Wait for the promise to complete
                                            returnVal.then(props => {
                                                // Resolve the promise
                                                resolve(props || controlProps);
                                            })
                                        } else {
                                            // Resolve the promise
                                            resolve(controlProps);
                                        }
                                    },
                                    // Error
                                    msg => {
                                        // Set the error message
                                        let errorMessage = "Error loading the mms terms for '" + props.field.InternalName + "'.";

                                        // Display an error message
                                        Components.Alert({
                                            el: controlProps.el,
                                            content: errorMessage,
                                            type: Components.AlertTypes.Danger
                                        });

                                        // Call the error event
                                        props.onError ? props.onError(errorMessage) : null;
                                    }
                                );
                            },
                            // Error
                            msg => {
                                // Set the error message
                                let errorMessage = "Error loading the mms value field for '" + props.field.InternalName + "'.";

                                // Display an error message
                                Components.Alert({
                                    el: controlProps.el,
                                    content: errorMessage,
                                    type: Components.AlertTypes.Danger
                                });

                                // Call the error event
                                props.onError ? props.onError(errorMessage) : null;

                                // Reject the request
                                reject(msg);
                            }
                        );
                    },
                    msg => {
                        // Display an error message
                        Components.Alert({
                            el: controlProps.el,
                            content: msg,
                            type: Components.AlertTypes.Danger
                        });

                        // Call the error event
                        props.onError ? props.onError(msg) : null;
                    }
                );
            });
        };
    }

    // Create the field
    let field = {
        control,
        controlProps,
        setControl: ctrl => { control = ctrl; field.control = ctrl; },
        getValue: () => {
            let fieldValue: IFieldValue = {
                name: props.field.InternalName,
                value: control ? control.getValue() : null
            };

            // Get the checkbox and dropdown value(s)
            let cbValues = control.checkbox ? control.checkbox.getValue().selectedItems : null;
            let ddlValues = control.dropdown ? control.dropdown.getValue() : null;

            // See if there is a custom value
            if (controlProps && controlProps.onGetValue) {
                // Update the value
                fieldValue.value = controlProps.onGetValue(controlProps);
            }

            // Update the field name/value, based on the type
            switch (props.field.FieldTypeKind) {
                // Boolean
                case SPTypes.FieldType.Boolean:
                    // Update the value
                    fieldValue.value = cbValues ? true : false;
                    break;

                // Choice
                case SPTypes.FieldType.Choice:
                    // See if this is a dropdown
                    if (ddlValues) {
                        // See if there is a value
                        let ddlValue = ddlValues as Components.IDropdownItem;
                        if (ddlValue) {
                            if (ddlValue.value || ddlValue.text) {
                                // Update the field value
                                fieldValue.value = ddlValue.value || ddlValue.text;
                            } else {
                                // Blank entry, clear the value
                                fieldValue.value = null;
                            }
                        }
                    } else {
                        // See if there is a value
                        if (cbValues) {
                            // Update the field value
                            fieldValue.value = (cbValues as Components.ICheckboxGroupItem).label;
                        }
                    }

                    // Get the fill-in option
                    let elFillIn = control.el.querySelector(".choice-fill-in input") as HTMLInputElement;
                    if (elFillIn && elFillIn.value) {
                        // Set the value
                        fieldValue.value = elFillIn.value;
                    }
                    break;

                // Number Field
                case SPTypes.FieldType.Currency:
                    // Ensure a value exists, otherwise null
                    fieldValue.value = fieldValue.value || null;
                    break;

                // Date/Time
                case SPTypes.FieldType.DateTime:
                    // Ensure a value exists, otherwise null
                    fieldValue.value = fieldValue.value ? (fieldValue.value as Date).toISOString() : null;
                    break;

                // Image
                case SPTypes.FieldType.Image:
                    // Do nothing, there is a custom method in the list form component
                    // to set this value
                    break;

                // Lookup
                case SPTypes.FieldType.Lookup:
                    // Append 'Id' to the field name
                    fieldValue.name += fieldValue.name.lastIndexOf("Id") == fieldValue.name.length - 2 ? "" : "Id";

                    // See if this is a multi-value field
                    if (lookupFieldInfo.multi) {
                        let values = ddlValues as Components.IDropdownItem[] || [];
                        fieldValue.value = { results: [] };

                        // Parse the values
                        for (let j = 0; j < values.length; j++) {
                            // Add the value
                            fieldValue.value.results.push(values[j].value || values[j].text);
                        }
                    } else {
                        // Update the field value
                        fieldValue.value = fieldValue.value ? (ddlValues as Components.IDropdownItem).value || (ddlValues as Components.IDropdownItem).text : null;

                        // Ensure a value exists, otherwise null
                        fieldValue.value = fieldValue.value || null;
                    }
                    break;

                // Multi-Choice
                case SPTypes.FieldType.MultiChoice:
                    let values = (cbValues ? cbValues as Components.ICheckboxGroupItem[] : ddlValues as Components.IDropdownItem[]) || [];
                    fieldValue.value = { results: [] };

                    // Parse the values
                    for (let j = 0; j < values.length; j++) {
                        // See if this is a dropdown
                        if (controlProps.type == Components.FormControlTypes.MultiDropdown) {
                            // See if there is a value
                            let ddlValue: Components.IDropdownItem = values[j];
                            if (ddlValue && (ddlValue.value || ddlValue.text)) {
                                // Add the values
                                fieldValue.value.results.push(ddlValue.value || ddlValue.text);
                            }
                        } else {
                            // See if there is a value
                            let cbValue: Components.ICheckboxGroupItem = values[j];

                            // Add the values
                            cbValue.label ? fieldValue.value.results.push(cbValue.label) : null;
                        }
                    }

                    // Get the fill-in option
                    let elFillInMulti = control.el.querySelector(".choice-fill-in input") as HTMLInputElement;
                    if (elFillInMulti && elFillInMulti.value) {
                        // Append the value
                        fieldValue.value.results.push(elFillInMulti.value);
                    }
                    break;

                // Number Field
                case SPTypes.FieldType.Number:
                    let numberField = props.field as Types.SP.FieldNumber;

                    // Ensure a field value exists
                    if (fieldValue.value) {
                        // See if this is a percentage
                        if (numberField.ShowAsPercentage) {
                            // Update the value
                            fieldValue.value = fieldValue.value / 100;
                        }
                    } else {
                        // Ensure the value is null
                        fieldValue.value = null;
                    }
                    break;

                // URL
                case SPTypes.FieldType.URL:
                    // See if the field value exists
                    if (fieldValue.value && fieldValue.value.Url) {
                        // Set the url, and validate the format
                        let url = fieldValue.value.Url;
                        if (url && /^http/.test(url.toLowerCase()) == false) {
                            // Update the url, otherwise the request will fail
                            url = "https://" + url;
                        }

                        // Add the metadata
                        fieldValue.value = {
                            __metadata: { type: "SP.FieldUrlValue" },
                            Description: fieldValue.value.Description || "",
                            Url: url
                        };
                    } else {
                        // Ensure the value is null
                        fieldValue.value = null;
                    }
                    break;

                // User
                case SPTypes.FieldType.User:
                    // Append 'Id' to the field name
                    fieldValue.name += fieldValue.name.lastIndexOf("Id") == fieldValue.name.length - 2 ? "" : "Id";

                    // See if this is a multi-value field
                    if ((props.field as Types.SP.FieldUser).AllowMultipleValues) {
                        let values: Array<Components.IDropdownItem> = fieldValue.value || [];

                        // Default the value
                        fieldValue.value = { results: [] };

                        // Parse the options
                        for (let j = 0; j < values.length; j++) {
                            let userValue = values[j] as Types.SP.User | Types.SP.Group;

                            // Add the field value
                            userValue.Id ? fieldValue.value.results.push(userValue.Id) : null;
                        }
                    } else {
                        let userValue: Types.SP.User | Types.SP.Group = fieldValue.value ? fieldValue.value[0] : null;

                        // Set the field value
                        fieldValue.value = userValue && userValue.Id ? userValue.Id : null;
                    }
                    break;

                // MMS
                default:
                    // See if this is a MMS field
                    if (mmsFieldInfo) {
                        // Update the field name to the value field
                        fieldValue.name = mmsFieldInfo ? mmsFieldInfo.valueField.InternalName : fieldValue.name + "_0";

                        // See if this is a multi field
                        if (mmsFieldInfo.multi) {
                            // Parse the field values
                            let fieldValues = ddlValues as Components.IDropdownItem[] || [];
                            fieldValue.value = [];
                            for (let j = 0; j < fieldValues.length; j++) {
                                let termInfo = fieldValues[j];

                                // Add the field value
                                fieldValue.value.push(-1 + ";#" + termInfo.text + "|" + termInfo.value);
                            }

                            // Set the field value
                            fieldValue.value = fieldValue.value.join(";#");
                        } else {
                            // Set the value
                            fieldValue.value = ddlValues && (ddlValues as Components.IDropdownItem).value ? -1 + ";#" + (ddlValues as Components.IDropdownItem).text + "|" + (ddlValues as Components.IDropdownItem).value : "";
                        }
                    }
                    break;
            }

            // Return the field value
            return fieldValue;
        },
        isValid: () => {
            // See if there is base validation
            if (baseValidation) {
                // Validate the field
                let baseResult = baseValidation(control, { isValid: control.isValid, value: control.getValue() });

                // Validate the current control
                let result = controlProps && controlProps.onValidate ? controlProps.onValidate(controlProps, baseResult) : baseResult;

                // Return the flag
                if (typeof (result) === "boolean") {
                    // Update the validation
                    baseResult.isValid = result;
                    control.updateValidation(control.el, baseResult);

                    // Return the result
                    return result;
                }

                // Update the validation
                control.updateValidation(control.el, result);

                // Return the flag
                return result.isValid;
            }

            // See if custom validation exists
            if (controlProps.onValidate) {
                // Call the custom validation event
                let value = controlProps.onGetValue ? controlProps.onGetValue(controlProps) : control ? control.getValue() : null;
                let result = controlProps.onValidate(controlProps, { isValid: control ? control.isValid : false, value });

                // Return the flag
                if (typeof (result) === "boolean") {
                    // Return the result
                    return result;
                }

                // Return the flag
                return result ? result.isValid : false;
            }

            // Validate the control
            return control ? control.isValid : false;
        }
    };

    // Execute the assign to event
    props.assignTo ? props.assignTo(field as any) : null;

    // Return the field
    return field as any;
}