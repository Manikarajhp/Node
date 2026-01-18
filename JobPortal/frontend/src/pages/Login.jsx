import { useState } from "react";
import { loginUser } from "../services/authService";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);
      login(res.data.user, res.data.token);

      if (res.data.user.role === "company") navigate("/company");
      else navigate("/user");

    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="container mt-5 shadow-sm p-3 bg-white rounded">
      <h3>Login</h3>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="email" placeholder="Email" onChange={handleChange} />
        <input className="form-control mb-3" name="password" type="password" placeholder="Password" onChange={handleChange} />
        <button className="btn btn-success">Login</button>
      </form>
    </div>
  );
};

export default Login;
