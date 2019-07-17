import React from 'react';

import Comment from './Comment';
import './Post.css';

function Post({ post }) {
  return (
    <div className="post_box">
      <div className="post_header">
        <img
          className="avatar_post"
          src={post.author.avatar}
          alt="post author avatar"
        />
        <div className="post_header_text">
          <p className="author_name">{post.author.name}</p>
          <p className="date">{post.date}</p>
        </div>
      </div>

      <li className="post_content" key={post.id}>
        {post.content}
      </li>
      <hr noshade="true" />

      <ul>
        {post.comments.map(comment => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </ul>
    </div>
  );
}

export default Post;
