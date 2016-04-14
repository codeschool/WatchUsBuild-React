import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import {hashHistory, Router, Route, Redirect} from 'react-router';

import Layout from './layout/layout'

import BlogPage from './pages/blog'
import PicturePage from './pages/picture'
import VideoPage from './pages/video'

const app = (
  <Router history={hashHistory}>
    <Redirect from="/" to="/blog" />
    <Route path="/" component={Layout}>
      <Route path="blog" component={BlogPage} />
      <Route path="picture" component={PicturePage} />
      <Route path="video" component={VideoPage} />
    </Route>
  </Router>
)

jQuery(function() {
  ReactDOM.render(
    app,
    document.getElementById('comment-box'),
    function() {
      console.timeEnd('react-app')
    }
  );
})
