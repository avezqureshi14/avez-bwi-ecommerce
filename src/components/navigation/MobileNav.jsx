import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const MobileNav = () => {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    setIsLoggedIn(!!profile);
  }, []);
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div className="mobile-bottom-navigation">
      <NavLink to='/' >
      <button className="action-btn">
        <ion-icon name="home-outline"></ion-icon>
      </button>
      </NavLink>
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
        <NavLink to="/search">
          <button className="action-btn">
          <ion-icon name="storefront-outline"></ion-icon>
          </button>
        </NavLink>
      
    </div>
  );
};

export default MobileNav;
