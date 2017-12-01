import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import MyHeader from './components/Header/Header.jsx';
import Routes from './routes/routes.jsx';
import '../node_modules/normalize.css/normalize.css';

ReactDOM.render(
  <Router>
    <Routes></Routes>
  </Router>,
  document.getElementById('root')
)



