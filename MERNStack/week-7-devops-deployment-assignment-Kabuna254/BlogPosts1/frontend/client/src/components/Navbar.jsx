import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { authService } from "../api/authService";

const Navbar = () => {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();

  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  };

  const handleDeleteAccount = async () => {
    try {
        await authService.deleteAccount();
        alert("Account deleted successfully");
        navigate("/register");
    } catch (error) {
        console.error("Error deleting account:", error);
        alert("Failed to delete account. Please try again.");
    }
  };

  return (
    <nav className="bg-black text-white px-4 py-3 flex justify-between items-center">
      <Link to="/" className="font-bold">My Blog</Link>
      <div className="flex items-center gap-4 ml-auto">
        <Link to="/create" className="text-blue-300">Create Post</Link>
        {user && (
          <>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
            <button
              onClick={handleDeleteAccount}
              className="delete-btn bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 ml-2"
            >
              Delete Account
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
