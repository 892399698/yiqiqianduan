import React from 'react';

class layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { layoutClass = '' } = this.props;
        let className = layoutClass + ' yiqiqianduan-layout';
        return <div className={className}>
            {this.props.children}
        </div>;
    }
}
export default layout;