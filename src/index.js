import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './index.css';
// import App from './App';
import Login from './components/login';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();



render((
  <Router>
  	<Route path="/" component={Login}/>
  </Router>
), document.getElementById('root'));