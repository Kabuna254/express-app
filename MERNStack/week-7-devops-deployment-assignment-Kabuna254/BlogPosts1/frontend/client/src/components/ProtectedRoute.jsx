import { Navigate } from 'react-router-dom';
import { authService } from '../api/authService';

const ProtectedRoute = ({ children }) => {
  const user = authService.getCurrentUser();
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;