import React, { Component } from 'react';
// import { Layout, notification, Icon } from 'antd';
import './style/index.css';


import Layout from './components/common/Layout';
import SiderCustom from './components/common/SiderCustom';
import HeaderCustom from './components/common/HeaderCustom';
import Content from './components/common/Content';
import Footer from './components/common/Footer';
import { receiveData } from './action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Routes from './routes';
// const { Content, Footer } = Layout;

class App extends Component {
    // state = {
    //     collapsed: false,
    // };
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }
    componentWillMount() {
        // const { receiveData } = this.props;
        // const user = JSON.parse(localStorage.getItem('user'));
        // user && receiveData(user, 'auth');

        // this.getClientWidth();
        // window.onresize = () => {
        //     console.log('屏幕变化了');
        //     this.getClientWidth();
        //     // console.log(document.body.clientWidth);
        // }
    }
    // getClientWidth = () => {    // 获取当前浏览器宽度并设置responsive管理响应式
    // const { receiveData } = this.props;
    // const clientWidth = document.body.clientWidth;
    // console.log(clientWidth);
    // receiveData({isMobile: clientWidth <= 992}, 'responsive');
    // };
    // toggle = () => {
    //     this.setState({
    //         collapsed: !this.state.collapsed,
    //     });
    // };
    render() {
        const { auth, responsive } = this.props;
        return (
            <Layout>
                {!responsive.data.isMobile && <SiderCustom collapsed={this.state.collapsed} />}
                <Layout layoutClass="yiqiqianduan-container-layout">
                    <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} user={auth.data || {}} />
                    <Content style={{ margin: '0 16px', overflow: 'initial' }}>
                        <Routes auth={auth} />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        React-Admin ©2017 Created by 865470087@qq.com
                    </Footer>
                </Layout>

                {
                    responsive.data.isMobile && (   // 手机端对滚动很慢的处理
                        <style>
                            {`
                            #root{
                                height: auto;
                            }
                        `}
                        </style>
                    )
                }
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    const { auth = { data: {} }, responsive = { data: {} } } = state.httpData;
    return { auth, responsive };
};
const mapDispatchToProps = dispatch => ({
    receiveData: bindActionCreators(receiveData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
