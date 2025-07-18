import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { postService } from "../api/api";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      try {
        const data = await postService.getPost(id);
        setPost(data);
        setComments(data.comments || []);
        setError("");
      } catch (err) {
        setError("Failed to load post");
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [id]);

  // 2. Add Comment Handler
  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    try {
      const newComment = await postService.addComment(id, { text: comment });
      setComments([...comments, newComment]);
      setComment("");
    } catch (err) {
      setError("Failed to add comment");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!post) return null;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <h3 className="mt-6 mb-2">Comments</h3>
      <ul>
        {comments.map((c, idx) => (
          <li key={c._id || idx} className="mb-2 border-b pb-2">{c.text}</li>
        ))}
      </ul>

      <form onSubmit={handleAddComment} className="mt-4">
        <input
          type="text"
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="Add a comment..."
          className="border p-2 w-full mb-2"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default PostDetails;
