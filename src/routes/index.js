import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import Home from '../containers/Home';
import Artists from '../containers/Artists';
import Songs from '../containers/Songs';

class Routes extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/artists" component={Artists} />
        <Route exact path="/songs" component={Songs} />
      </Fragment>
    );
  }
}

export default Routes;