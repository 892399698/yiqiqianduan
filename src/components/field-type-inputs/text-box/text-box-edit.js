import React from 'react';
import BaseComponent from '../../common/base-component';
class textBoxEdit extends BaseComponent {
    constructor() {
        super();
    }
    change(ev) {
        let v = ev.target.value;
        let {field, onChange} = this.props;
        if (this.validate) {
            let result = this.validate(v);
            if (!result.valid) {
                alert(result.message);
                return;
            }
        }
        let value = {
            fieldValue: v,
            fieldName: field.fieldName
        }
        field.value = value;
        if (onChange) {
            onChange(value);
        }
    }
    render() {
        let {attributes={}} = this.props;
        let {classNames, autofocus, type} = attributes;
        return (<input type={ type } autoFocus={ autofocus ? 'autofocus' : '' } className={ attributes.classNames } onChange={ this.change.bind(this) } />)
    }
}
export default textBoxEdit;