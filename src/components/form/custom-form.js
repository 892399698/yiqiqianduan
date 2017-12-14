import React from 'react';
import { Button } from 'react-bootstrap';
// import 
class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    createFormBody() {
        let result = [];
        let {
            fields
        } = this.props;
        fields.forEach((_f) => {
            let type = _f.type;
            let component = 1;
            component && result.push(component);
        })
        return result;
    }
    render() {
        let {
            fields,
            hasCancel = true
        } = this.props;
        let confirmBtn = ( <
            Button bsStyle = 'primary' >
            确定 <
            /Button>
        )
        let cancelBtn = ( <
            Button bsStyle = 'default' >
            取消 <
            /Button>
        )
        return <div className = "custom-form-wrap" >
	            <div className = "form-fields" > 
	            	{ this.createFormBody.bind(this)() } 
	            </div>
	        	<div className = "form-btns" >
	        		{ confirmBtn } { hasCancel ? cancelBtn : '' } 
	    		</div>

            </div>
    }
}
Login.defaultProps = {
    fields: []
}
export default Login;