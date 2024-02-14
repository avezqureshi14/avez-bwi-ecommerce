import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/actions/login";
import {useNavigate} from "react-router-dom"
import Loading from "../components/common/Loading";
import Header from "../components/navigation/Header"

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    setIsLoggedIn(!!profile); // !! converts the value to a boolean
  }, []);

  const logout = () => {
    navigate("/");
    localStorage.removeItem("profile");
    setIsLoggedIn(false); // Update state to reflect logout
    window.location.reload(); // Reload the page after logout
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state) => state.login);
  console.log(user);
  if (!user) {
    return <Loading />;
  }
  return (
    <>
    <Header/>
    <main className="loginForm ">
      <div className="testimonial">
        <div className="testimonial-card profile sha">
          <h1>Profile</h1>

          <img
            src={user.image}
            alt={user.username}
            className="testimonial-banner"
            width="80"
            height="80"
          />

          <p className="testimonial-name">
            {user.firstName} {user.lastName}
          </p>

          <p className="testimonial-title">{user.email}</p>

          <p className="testimonial-desc">
            Hey! Myself {user.username} and currently, I'm busy shopping on
            Avez's Site
          </p>

          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </main>
    </>
  );
};

export default Profile;
