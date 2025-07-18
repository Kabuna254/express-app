import React, { useState } from 'react';
import { postService } from '../api/api';
import useApi from '../hooks/useApi';
import PostList from '../components/PostList';

const Home = () => {
  const [page, setPage] = useState(1);
  const { data: posts, loading } = useApi(() => postService.getAllPosts(page));

  if (loading) return <p>Loading posts...</p>;

  return (
    <>
      <PostList posts={posts} />
      <div className="button-group">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </>
  );
};

export default Home;
