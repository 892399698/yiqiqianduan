import React from 'react';

class layout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className="yiqiqianduan-layout">
            {this.props.children}
        </div>;
    }
}
export default layout;