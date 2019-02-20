import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import Home from '../containers/Home';
import Artists from '../containers/Artists';

class Routes extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/artists" component={Artists} />
      </Fragment>
    );
  }
}

export default Routes;