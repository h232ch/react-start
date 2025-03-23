// src/components/BoardList.js
import React from 'react';

function BoardList({ posts, onSelect, onDelete }) {
  if (posts.length === 0) return <p>No posts yet.</p>;

  return (
    <div>
      <h3>Post List</h3>
      <ul>
        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: '10px' }}>
            <strong onClick={() => onSelect(post)} style={{ cursor: 'pointer' }}>
              {post.title}
            </strong>
            <button onClick={() => onDelete(post.id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BoardList;
