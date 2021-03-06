import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../containers/Home';
import Artists from '../containers/Artists';
import Songs from '../containers/Songs';
import AdminArtists from '../containers/Admin/Artists';
import AdminSongs from '../containers/Admin/Songs';

function Routes() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/artists" component={Artists} />
      <Route exact path="/songs" component={Songs} />
      <Route exact path="/admin/artists" component={AdminArtists} />
      <Route exact path="/admin/songs" component={AdminSongs} />
    </>
  );
}

export default Routes;