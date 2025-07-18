import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostDetails from './pages/PostDetails';
import CreatePost from './pages/CreatePost';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/posts/:id"
          element={
            <Layout>
              <PostDetails />
            </Layout>
          }
        />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <Layout>
                <CreatePost />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
