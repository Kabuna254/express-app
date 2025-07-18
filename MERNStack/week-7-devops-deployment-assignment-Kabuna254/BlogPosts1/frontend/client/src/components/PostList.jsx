const PostList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
        <div className="h-full flex items-center justify-center">
            <p>No posts found.</p>
        </div>
    );
  }
  return (
    <ul>
      {posts.map(post => (
        <li key={post._id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostList;
