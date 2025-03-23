// src/components/BoardForm.js
import React, { useState } from 'react';

function BoardForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = () => {
    const user = localStorage.getItem('user');
    if (!user) return alert("Please login first.");
    if (title && body) {
      onSubmit({
        title,
        body,
        user,
        time: new Date().toLocaleString(),
      });
      setTitle('');
      setBody('');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>Write a Post</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', width: '100%', height: '80px' }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default BoardForm;
