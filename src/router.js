// Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import Home from './pages/Home';
import Video_Game_Projects from './pages/Video-Game-Projects';
import Film_Projects from './pages/Film-Projects';
import Music_Projects from './pages/Music-Projects';
import Sound_Design from './pages/Sound-Design';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Routes
const routes = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="sound-design" component={Sound_Design} />
      <Route path="video-game-projects" component={Video_Game_Projects} />
      <Route path="film-projects" component={Film_Projects} />
      <Route path="music-projects" component={Music_Projects} />
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default routes;