import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './index.css';
// import App from './App';
import Login from './components/login';
import Page from './Page';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
let basePath = __dirname;
// console.log('basePath',basePath)
window.basePath = basePath;


const store=createStore(reducer,applyMiddleware(thunk));
// class index extends React.Component {
//     render() {
//         return <div>ceshi</div>
//     }
//     constructor(props) {
//         super(props);
//     }
// }

render((
    <AppContainer>
        <Provider store={store}>
            <Page store={store} />
        </Provider>
    </AppContainer>
    // <Router basename="/admin">
    //     <div className="17qianduan_admin">
    //         <Route exact path="/" component={index} />
    //         <Route path="/login" component={Login} />
    //     </div>
    // </Router>
    ), document.getElementById('root'));