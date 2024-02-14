import React from "react";
import jeff from "../../assets/images/jeff.png"
import quote from "../../assets/images/icons/quotes.svg"
const Testimonials = () => {
  return (
    <>
      <div className="testimonial">
        <h2 className="title">testimonial</h2>

        <div className="testimonial-card">
          <img
            src={jeff}
            alt="alan doe"
            className="testimonial-banner"
            width="80"
            height="80"
          />

          <p className="testimonial-name">Jeff Bezos</p>

          <p className="testimonial-title">CEO & Founder Amazon</p>

          <img
            src={quote}
            alt="quotation"
            className="quotation-img"
            width="26"
          />

          <p className="testimonial-desc">
            Avez gave me more better experience on his site, than Amazon
          </p>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
