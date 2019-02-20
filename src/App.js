import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Home from './components/Home';
import actions from './actions';


function App() {
  return (
    <Router>
        <Route path="/" exact render={() => <Home />} />
    </Router >
  )
}

export default connect(store => store, actions)(App);