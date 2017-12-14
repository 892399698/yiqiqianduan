import React from 'react';
import Form from './form/custom-form';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    onSubmit() {

    }
    render() {
        let fields = this.props.fields;
        return ( 
        	<Form fields = { fields } onSubmit = { this.onSubmit.bind(this) }/>
        )

    }
}

Login.defaultProps = {
    fields: [{
        fieldName: 'username',
        type: 'text',

    }, {
        fieldName: 'password',
        type: 'password',

    }]
}
export default Login;