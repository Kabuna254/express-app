import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  return (
    <div className="p-4 border rounded-lg shadow mb-4">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-gray-600">{post.excerpt || post.content.substring(0, 100) + '...'}</p>
      <Link
        to={`/posts/${post._id}`}
        className="text-blue-500 hover:underline mt-2 block"
      >
        Read More
      </Link>
    </div>
  );
};

export default PostItem;
