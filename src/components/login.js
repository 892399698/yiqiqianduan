import React from 'react';
import Form from './form/custom-form';
import { ajaxPost } from '../common/ajax';
class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    onSubmit(cb) {
        let fields = this.props.fields;
        console.log('fields', fields);
        let data = {};
        fields.forEach((_f) => {
            let fieldName = _f.fieldName,
            fieldValue = _f.value.fieldValue;
            if (fieldName && fieldValue) {
                data[fieldName] = fieldValue;
            }
        })
        ajaxPost('/spa/login', data).then((res) => {
            console.log('res', res);
        })
        cb && cb();
    }
    render() {
        let fields = this.props.fields;
        return (
            <Form hasCancel={false} fields={fields} onSubmit={this.onSubmit.bind(this)} />
        )

    }
}

Login.defaultProps = {
    fields: [{
        fieldName: 'username',
        type: 'text',
        required: true

    }, {
        fieldName: 'password',
        type: 'password',
        required: true

    }]
}
export default Login;