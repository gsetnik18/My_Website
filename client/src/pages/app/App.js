import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header/header.js';
import Welcome from '../welcome/Welcome.js';
import Profile from './components/profile/profile.js';
import BlogPosts from './components/blogposts/blog.js';
import Portfolio from './components/portfolio/portfolio.js';
import ContactForm from './components/contact/contact.js';

const App = () => {
  return (
    <Router>
      {/*we only want this to render after user has chosen settings and navigated to main page*/}
      <Header />
        <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/profile" component={Profile} />
        <Route path="/blog" component={BlogPosts} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={ContactForm} />
      </Switch>
    </Router>
  )
};


export default App;