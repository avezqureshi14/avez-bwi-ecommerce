import React from "react";
import summer from "../../assets/images/cta-banner.jpg"
const CTA = () => {
  return (
    <>
      <div className="cta-container">
        <img
          src={summer}
          alt="summer collection"
          className="cta-banner"
        />

        <a href="#" className="cta-content">
          <p className="discount">25% Discount</p>

          <h2 className="cta-title">Summer collection</h2>

          <p className="cta-text">Starting @ $10</p>

          <button className="cta-btn">Shop now</button>
        </a>
      </div>
    </>
  );
};

export default CTA;
