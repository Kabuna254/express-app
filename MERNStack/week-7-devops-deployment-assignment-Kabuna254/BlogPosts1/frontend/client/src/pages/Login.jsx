import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authService } from "../api/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await authService.login({ email, password });
      navigate("/");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl mb-4">Login</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
        required
      />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
      <div className="mt-4 text-center">
        <span>Don't have an account? </span>
        <Link to="/register" className="text-blue-600 underline">Register</Link>
      </div>
    </form>
  );
};

export default Login;