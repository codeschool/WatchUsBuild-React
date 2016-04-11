import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/comment-box';

// Render when document is ready
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <CommentBox />,
    document.getElementById('comment-box')
  );
});
