import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import CommentBox from './components/comment_box';


jQuery(function() {
  ReactDOM.render(
    <CommentBox />,
    document.getElementById('comment-box'),
    function() {
      console.timeEnd('react_app');
    }
  );
});
