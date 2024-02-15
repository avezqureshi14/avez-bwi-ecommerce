import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin } from "../redux/actions/login";
import Header from "../components/navigation/Header"
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialFormData = {
    username: "kminchelle",
    password: "0lelplR",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(signin(formData));
      navigate("/?reload=true");
    } catch (error) {
      console.error("Error:", error.message);
      console.error("Response Data:", error.response.data);
    }
  };

  return (
    <>
      <Header/>
      <main className="loginForm"  style={{marginTop:"8%"}}  >
        <div className="testimonial">
          <div className="testimonial-card sha">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
