import React from 'react';

class HeaderCustom extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (<div className="yiqiqianduan-content-layout">{this.props.children}</div>);
    }
}

export default HeaderCustom;