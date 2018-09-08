import { Helper, SPTypes } from "gd-sprest";

/**
 * Field Information
 */
export const FieldInfo = (fieldInfo: Helper.Types.IListFormFieldInfo): PromiseLike<Helper.Types.IListFormFieldInfo> => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Load the field information
        Helper.ListFormField.create(fieldInfo).then(fieldInfo => {
            // Render the field based on the type
            switch (fieldInfo.type) {
                // Lookup Field
                case SPTypes.FieldType.Lookup:
                    // Get the drop down information
                    Helper.ListFormField.loadLookupData(fieldInfo as Helper.Types.IListFormLookupFieldInfo, 500).then(items => {
                        resolve(fieldInfo);
                    });
                    return;
            }

            // See if this is a taxonomy field
            if (fieldInfo.typeAsString.startsWith("TaxonomyFieldType")) {
                let mmsInfo = fieldInfo as Helper.Types.IListFormMMSFieldInfo;

                // Load the value field
                Helper.ListFormField.loadMMSValueField(fieldInfo as Helper.Types.IListFormMMSFieldInfo).then(valueField => {
                    // Set the value field
                    mmsInfo.valueField = valueField;

                    // Resolve the promise
                    resolve(mmsInfo);
                });
                return;
            } else {
                // Log
                console.warn("[gd-sprest] The field type '" + fieldInfo.typeAsString + "' is not supported.");
            }

            // Resolve the promise
            resolve(fieldInfo);
        });
    });
}