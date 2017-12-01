import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

import Home from '../pages/Home/Home.jsx';
import Detail from '../pages/Detail/Detail.jsx';
import Login from '../pages/Login/Login.jsx';
import '../scss/common.scss';


class Routes extends React.Component {
  render() {
    return (
      <div>
        <Link to="/login">Home</Link>
        <Route exact path="/" component={Home}/>
        <Route path="/detail" component={Detail}/>
        <Route path="/login" component={Login}/>
      </div>
    )
  }
}

export default Routes;