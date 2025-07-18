import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../api/authService";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await authService.register({ name, email, password });
      navigate("/login");
    } catch (err) {
      setError("Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl mb-4">Register</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
        required
      />
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
      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Register</button>
    </form>
  );
};

export default Register;