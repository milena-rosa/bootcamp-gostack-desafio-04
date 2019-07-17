import React from 'react';

import './Comment.css';

function Comment({ comment }) {
  return (
    <div className="comment_box">
      <img
        className="avatar_comment"
        src={comment.author.avatar}
        alt="comment author avatar"
      />
      <div className="comment_content">
        <span className="author_comment">{comment.author.name}</span>
        {comment.content}
      </div>
    </div>
  );
}

export default Comment;
