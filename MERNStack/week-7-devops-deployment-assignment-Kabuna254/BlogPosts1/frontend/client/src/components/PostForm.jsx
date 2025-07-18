import { useState } from 'react';

const PostForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [content, setContent] = useState(initialData.content || '');
  const [imageFile, setImageFile] = useState(null); // New state for image file

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', imageFile); // Append imageFile to formData

    await postService.createPost(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="w-full border p-2"
        required
      />
      <textarea
        placeholder="Post Content"
        value={content}
        onChange={e => setContent(e.target.value)}
        className="w-full border p-2"
        rows="6"
        required
      />
      <input
        type="file"
        onChange={e => setImageFile(e.target.files[0])}
        className="w-full border p-2"
        accept="image/*"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
};

export default PostForm;
