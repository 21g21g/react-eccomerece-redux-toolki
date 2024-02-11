import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setUser((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="container mt-3">
        <h1 className="text-center bg-secondary">login</h1>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            onChange={handleChange}
            value={user.email}
            className="form-control"
          />
          <input
            type="password"
            name="password"
            placeholder="enter your password"
            onChange={handleChange}
            value={user.password}
            className="form-control"
          />
          <Link to="/dashboard">
            {" "}
            <button type="submit" className="btn btn-primary float-right ">
              login
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
