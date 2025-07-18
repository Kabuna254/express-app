const SinglePost = ({ post }) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-2">{post.content}</p>
    </div>
  );
};

export default SinglePost;
