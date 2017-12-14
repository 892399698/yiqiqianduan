import React from 'react';
class baseComponent from React.Component {
    constructor(props) {
        super(props);
    }

    validate() {
    	let result={
    		valid:true
    	}
        let {
            required,
            fieldName
        } = this.props;
        let {
            value
        } = this.state;
        if (required) {
        	if(!value){
        		result.valid=false;
        		result.message=`${fieldName}不能为空!`;
        		return result ;
        	}
        }
    }
}
export baseComponent;