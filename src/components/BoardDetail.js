import React, { useState } from 'react';

function BoardDetail({ post, onBack, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSave = () => {
    onEdit({ ...post, title, body });
    setIsEditing(false);
  };

  return (
    <div className="board">
      <button onClick={onBack}>Back to list</button>
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            value={body}
            onChange={e => setBody(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{post.title}</h3>
          <p><strong>{post.user}</strong> - {post.time}</p>
          <p>{post.body}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => {
            onDelete(post.id);
            onBack();
          }}>Delete</button>
        </>
      )}
    </div>
  );
}

export default BoardDetail;
