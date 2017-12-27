import React from 'react';
import { Button } from 'react-bootstrap';
import Fields from '../../common/config/fields';
import tips from '../../common/tips';
// import 
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
        this.componentMaps = {};
    }
    validateAllFields() {
        let {fields} = this.props;
        let componentMaps = this.componentMaps;
        let results = [];
        fields.forEach((_f) => {
            let type = _f.type;
            let component = componentMaps[type];
            let v = _f.value && _f.value.fieldValue;
            if (component) {
                let result = component.validate(v);
                if (!result.valid) {
                    results.push(result.message);
                }
            }
        })
        if (results.length) {
            tips.error(results.join(','));
            return false;
        }
        return true;
    }
    onSubmit() {
        let {onSubmit} = this.props;
        this.setState({
            isLoading: true
        });
        let {fields} = this.props;
        let result = this.validateAllFields();
        if (result) {
            if (onSubmit) {
                onSubmit(() => {
                    this.setState({
                        isLoading: false
                    })
                });
            }
        } else {
            this.setState({
                isLoading: false
            });
        }
    }
    addToMap(type, instance) {
        let componentMaps = this.componentMaps || {};
        if (!componentMaps[type]) {
            componentMaps[type] = instance;
        }
    }
    createFormBody() {
        let result = [];
        let {fields} = this.props;
        fields.forEach((_f, index) => {
            let rowKey = 'row_' + index;
            result.push(<div key={ rowKey }>
                          <label>
                            { _f.fieldName }:</label>
                        </div>);
            let type = _f.type;
            let componentConfig = Fields.getFieldValueComponentConfigTable();
            let conf = componentConfig.find((_conf) => {
                if (_conf.fieldType === type) {
                    return true;
                }
            });
            let FieldComponent = conf && conf.component;
            let attributes = conf && conf.attributes;
            FieldComponent && result.push(<FieldComponent ref={ this.addToMap.bind(this, conf.fieldType) } required={ _f.required } field={ _f } key={ index } attributes={ attributes } />);

        })
        return result;
    }
    render() {
        let {fields, hasCancel = true} = this.props;
        let {isLoading} = this.state;
        let confirmBtn = ( < Button bsStyle='primary' disabled={ isLoading } onClick={ !isLoading ? this.onSubmit.bind(this) : null }>
                             { isLoading ? '提交中...' : '确定' }
                             < /Button>
        )
        let cancelBtn = ( < Button bsStyle='default'>
                            取消
                            < /Button>
        )
        return <form className="custom-form-wrap">
                 <div className="form-fields">
                   { this.createFormBody.bind(this)() }
                 </div>
                 <div className="form-btns">
                   { confirmBtn }
                   { hasCancel ? cancelBtn : '' }
                 </div>
               </form>
    }
}
Login.defaultProps = {
    fields: []
}
export default Login;