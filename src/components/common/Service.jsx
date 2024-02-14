import React from "react";

const Service = () => {
  return (
    <>
      <div className="service">
        <h2 className="title">Our Services</h2>

        <div className="service-container">
          <a href="#" className="service-item">
            <div className="service-icon">
              <ion-icon name="boat-outline"></ion-icon>
            </div>

            <div className="service-content">
              <h3 className="service-title">Worldwide Delivery</h3>
              <p className="service-desc">For Order Over $100</p>
            </div>
          </a>

          <a href="#" className="service-item">
            <div className="service-icon">
              <ion-icon name="rocket-outline"></ion-icon>
            </div>

            <div className="service-content">
              <h3 className="service-title">Next Day delivery</h3>
              <p className="service-desc">UK Orders Only</p>
            </div>
          </a>

          <a href="#" className="service-item">
            <div className="service-icon">
              <ion-icon name="call-outline"></ion-icon>
            </div>

            <div className="service-content">
              <h3 className="service-title">Best Online Support</h3>
              <p className="service-desc">Hours: 8AM - 11PM</p>
            </div>
          </a>

          <a href="#" className="service-item">
            <div className="service-icon">
              <ion-icon name="arrow-undo-outline"></ion-icon>
            </div>

            <div className="service-content">
              <h3 className="service-title">Return Policy</h3>
              <p className="service-desc">Easy & Free Return</p>
            </div>
          </a>

          <a href="#" className="service-item">
            <div className="service-icon">
              <ion-icon name="ticket-outline"></ion-icon>
            </div>

            <div className="service-content">
              <h3 className="service-title">30% money back</h3>
              <p className="service-desc">For Order Over $100</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Service;
