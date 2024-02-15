import React, { useEffect, useState } from "react";
import Banner from "../components/common/Banner";
import Products from "../components/common/Products";
import Testimonials from "../components/common/Testimonials";
import CTA from "../components/common/CTA";
import Service from "../components/common/Service";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "../components/navigation/Header";
const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const reload = queryParams.get("reload");
  const navigate = useNavigate();

  const [id, setId] = useState("");

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    setIsLoggedIn(!!profile); // !! converts the value to a boolean
    setId(profile?.result?._id);
    
  }, []);

  useEffect(() => {
    if (reload === "true") {
      // Remove the reload query parameter to avoid continuous reloads
      const newSearch = new URLSearchParams(search);
      newSearch.delete("reload");
      navigate({ search: newSearch.toString() });

      // Reload the page after necessary actions
      window.location.reload();
    }
  }, [reload, search, navigate]);

  return (
    <>
      <Header />

      <main>
        <Banner />
        <Products />
        <div className="container">
          <div className="testimonials-box">
            <Testimonials />
            <CTA />
            <Service />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
