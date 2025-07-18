import { useNavigate } from 'react-router-dom';
import { postService } from '../api/api';
import PostForm from '../components/PostForm';

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    await postService.createPost(formData);
    navigate('/');
  };

  return <PostForm onSubmit={handleSubmit} />;
};

export default CreatePost;
