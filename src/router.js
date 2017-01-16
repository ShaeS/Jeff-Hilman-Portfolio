// Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import Home from './pages/Home';
import Video_Game_Projects from './pages/Video-Game-Projects';
import Film_Projects from './pages/Film-Projects';
import Music_Projects from './pages/Music-Projects';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="video-game-projects" component={Video_Game_Projects} />
      <Route path="film-projects" component={Film_Projects} />
      <Route path="music-projects" component={Music_Projects} />
    </Route>
  </Router>
);

export default routes;