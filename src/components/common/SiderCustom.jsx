    import React from 'react';
    import SiderMenu from './SiderMenu';
    import {menus} from '../../common/config/menus';
    class SiderCustom extends React.Component {
        constructor(props) {
            super(props);
            let {
                collapsed
            } = this.props;
            this.state = {
                collapsed
            }
        }
        render() {
            let { collapsed } = this.state;
            return <div className={collapsed ? 'yiqiqianduan-siderbar siderbar-collapsed' : 'yiqiqianduan-siderbar'}>
                <div className="yiqiqianduan-logo" />
                <SiderMenu menus={menus} />
            </div>;
        }
    }

    export default SiderCustom;