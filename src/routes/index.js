import React, { Component } from 'react';
// import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
// import BasicForm from '../components/forms/BasicForm';
// import BasicTable from '../components/tables/BasicTables';
// import AdvancedTable from '../components/tables/AdvancedTables';
// import AsynchronousTable from '../components/tables/AsynchronousTable';
// import Echarts from '../components/charts/Echarts';
// import Recharts from '../components/charts/Recharts';
// import Icons from '../components/ui/Icons';
// import Buttons from '../components/ui/Buttons';
// import Spins from '../components/ui/Spins';
// import Modals from '../components/ui/Modals';
// import Notifications from '../components/ui/Notifications';
// import Tabs from '../components/ui/Tabs';
// import Banners from '../components/ui/banners';
// import Drags from '../components/ui/Draggable';
import Dashboard from '../components/dashboard/Dashboard';
import Articles from '../components/articles/index';
// import AddArticle from '../components/articles/addArticle';
// import Gallery from '../components/ui/Gallery';
// import BasicAnimations from '../components/animation/BasicAnimations';
// import ExampleAnimations from '../components/animation/ExampleAnimations';
// import AuthBasic from '../components/auth/Basic';
// import RouterEnter from '../components/auth/RouterEnter';
// import Wysiwyg from 'bundle-loader?lazy!../components/ui/Wysiwyg';  // 按需加载富文本配置
// import Bundle from '../components/widget/Bundle';
// import Cssmodule from '../components/cssmodule';

export default class CRouter extends Component {
    // requireAuth = (permission, component) => {
    //     const { auth } = this.props;
    //     const { permissions } = auth.data;
    //     if (!permissions || !permissions.includes(permission)) return <Redirect to={'404'} />;
    //     return component;
    // };
    render() {
        return (
            <Switch>
                <Route exact path="/app/dashboard/index" component={Dashboard} />
                <Route exact path="/app/articles/list" component={Articles} />

                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        )
    }
}