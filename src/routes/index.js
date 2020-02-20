import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import Home from '../containers/Home';
import Artists from '../containers/Artists';
import Songs from '../containers/Songs';
import AdminArtists from '../containers/Admin/Artists';

class Routes extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/artists" component={Artists} />
        <Route exact path="/songs" component={Songs} />
        <Route exact path="/admin/artists" component={AdminArtists} />
      </Fragment>
    );
  }
}

export default Routes;