import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../containers/Home';
import Register from '../containers/Register';
import Artists from '../containers/Artists';
import Songs from '../containers/Songs';
import AdminArtists from '../containers/Admin/Artists';
import AdminSongs from '../containers/Admin/Songs';
import Login from '../containers/Login';

const Routes: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/artists" component={Artists} />
      <Route exact path="/songs" component={Songs} />
      <Route exact path="/admin/artists" component={AdminArtists} />
      <Route exact path="/admin/songs" component={AdminSongs} />
    </>
  );
};

export default Routes;
