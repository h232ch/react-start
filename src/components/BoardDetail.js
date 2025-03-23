import React, { useState } from 'react';

function BoardDetail({ post, onBack, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(post.comments || []);
  const [editIndex, setEditIndex] = useState(null);
  const [editCommentText, setEditCommentText] = useState('');

  const currentUser = localStorage.getItem('user');

  const handleSave = () => {
    onEdit({ ...post, title, body, comments });
    setIsEditing(false);
  };

  const handleAddComment = () => {
    if (comment.trim() === '') return;
    const newComment = {
      text: comment,
      user: currentUser,
      time: new Date().toLocaleString(),
    };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    setComment('');
    onEdit({ ...post, title, body, comments: updatedComments });
  };

  const handleEditComment = (index, text) => {
    setEditIndex(index);
    setEditCommentText(text);
  };

  const handleSaveEditComment = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].text = editCommentText;
    updatedComments[index].time = new Date().toLocaleString(); // update time
    setComments(updatedComments);
    setEditIndex(null);
    setEditCommentText('');
    onEdit({ ...post, comments: updatedComments });
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    onEdit({ ...post, comments: updatedComments });
  };

  return (
    <div className="board">
      <button onClick={onBack}>← Back to list</button>

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

      {/* 💬 Comments Section */}
      <div className='comment-section'>
        <h4>Comments</h4>
        <ul>
          {comments.map((c, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editCommentText}
                    onChange={(e) => setEditCommentText(e.target.value)}
                  />
                  <button onClick={() => handleSaveEditComment(index)}>Save</button>
                  <button onClick={() => setEditIndex(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <p>{c.text}</p>
                  <small>— {c.user}, {c.time}</small><br />
                  {c.user === currentUser && (
                    <>
                      <button onClick={() => handleEditComment(index, c.text)}>Edit</button>
                      <button onClick={() => handleDeleteComment(index)}>Delete</button>
                    </>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>

        <input
          type="text"
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
}

export default BoardDetail;
