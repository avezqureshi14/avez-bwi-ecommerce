import React from "react";

const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="container">
        <ul className="header-social-container">
          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
        </ul>

        <div className="header-alert-news">
          <p>
            <b>Free Shipping</b>
            This Week Order Over - $55
          </p>
        </div>

        <div className="header-top-actions">
          <select name="currency">
            <option value="usd">USD $</option>
            <option value="eur">EUR &euro;</option>
          </select>

          <select name="language">
            <option value="en-US">English</option>
            <option value="es-ES">Espa&ntilde;ol</option>
            <option value="fr">Fran&ccedil;ais</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
