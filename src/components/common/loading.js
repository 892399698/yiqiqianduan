import React from 'react';
class Loading extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {
            className = '',
            isLoading
        } = this.props;
        return (<div display={isLoading ? 'block' : 'hide'} className={className + ' yiqiqianduan-loading'}></div>);
    }
}
export default Loading;