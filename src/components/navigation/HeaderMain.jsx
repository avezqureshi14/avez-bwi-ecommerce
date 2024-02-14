import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const HeaderMain = () => {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    setIsLoggedIn(!!profile);
  }, []);
  const cart = useSelector((state)=>state.cart.cart);

  return (
    <div className="header-main">
      <div className="container">
        <NavLink to="/" className="header-logo">
          <h2>Avez.</h2>
        </NavLink>

        <div className="header-search-container">
          <NavLink to="/search">
          <input
            type="search"
            name="search"
            className="search-field"
            placeholder="Enter your product name..."
          />
            <button className="search-btn">
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </NavLink>
        </div>
        <div className="header-user-actions">
          {isLoggedIn ? (
            <>
              <NavLink to="/profile">
                <button className="action-btn">
                  <ion-icon name="person-outline"></ion-icon>
                </button>
              </NavLink>
              <NavLink to="/cart">
                <button className="action-btn">
                  <ion-icon name="bag-handle-outline"></ion-icon>
                  <span className="count">{cart?.length}</span>
                </button>
              </NavLink>
            </>
          ) : (
            <NavLink to="/login">
              <button className="action-btn">
                <ion-icon name="person-outline"></ion-icon>
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
