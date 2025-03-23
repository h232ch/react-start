import React, { useState, useEffect } from 'react';
import BoardList from '../components/BoardList';
import BoardForm from '../components/BoardForm';
import BoardDetail from '../components/BoardDetail';

function Board() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  // Load posts from localStorage
  useEffect(() => {
    const savedPosts = localStorage.getItem('board_posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  // Save posts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('board_posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now(), comments: [] }]);
  };
  

  const updatePost = (updatedPost) => {
    setPosts(posts.map(p => (p.id === updatedPost.id ? updatedPost : p)));
  };

  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id !== id));
    if (selectedPost && selectedPost.id === id) {
      setSelectedPost(null);
    }
  };

  

  return (
    <div className="board">
      <h2>Board Page</h2>
      {!selectedPost ? (
        <>
          <BoardForm onSubmit={addPost} />
          <BoardList
            posts={posts}
            onSelect={setSelectedPost}
            onDelete={deletePost}
          />
        </>
      ) : (
        <BoardDetail
          post={selectedPost}
          onBack={() => setSelectedPost(null)}
          onEdit={updatePost}
          onDelete={deletePost}
        />
      )}
    </div>
  );
}

export default Board;
