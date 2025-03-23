import React from 'react';

function BoardList({ posts, onSelect, onDelete }) {
  if (posts.length === 0) return <p>No posts yet.</p>;

  return (
    <div className="board">
      <h3>Post List</h3>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong onClick={() => onSelect(post)}>
              {post.title}
            </strong>
            <button onClick={() => onDelete(post.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BoardList;
