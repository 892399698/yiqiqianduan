import React from 'react';
import UDL from '../../common/UDL';
class baseComponent extends React.Component {
    constructor(props) {
        super(props);

    }
    validate(v) {
        let result = {
            valid: true
        }
        let {required, field} = this.props;
        if (required) {
            if (!v) {
                result.valid = false;
                result.message = UDL.g('tip.error.fieldEmpty', [field.fieldName]);
            }
        }
        return result;

    }

}
export default baseComponent;