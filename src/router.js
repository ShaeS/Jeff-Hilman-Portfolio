// Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import Home from './pages/Home';
import Video_Game_Projects from './pages/Video-Game-Projects';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="video-game-projects" component={Video_Game_Projects} />
    </Route>
  </Router>
);

export default routes;