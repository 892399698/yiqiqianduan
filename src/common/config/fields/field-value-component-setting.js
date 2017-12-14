import fieldTypeInputMappings from "../../../components/field-type-inputs";
// import date from '../date';

function getFieldValueComponentConfigTable() {
    return [{
        fieldType: "text",
        component: fieldTypeInputMappings.TextboxEdit,
        attributes: {
            classNames: "udesk-sdk-ticket-input-control",
            autofocus: true,
        },
    }, {
        fieldType: "password",
        component: fieldTypeInputMappings.TextboxEdit,
        attributes: {
            classNames: "udesk-sdk-ticket-input-control",
            type:"password"
        }
    }];
}


export default getFieldValueComponentConfigTable;