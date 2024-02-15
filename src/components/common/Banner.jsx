import React from "react";
import banner1 from "../../assets/images/banner-1.jpg";
import banner2 from "../../assets/images/banner-2.jpg";
import banner3 from "../../assets/images/banner-3.jpg";
const Banner = () => {
  return (
    <>
      <div className="banner" style={{marginTop:"8%"}} >
        <div className="container">
          <div className="slider-container has-scrollbar">
            <div className="slider-item">
              <img
                src={banner1}
                alt="women's latest fashion sale"
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">Trending item</p>

                <h2 className="banner-title">Women's latest fashion sale</h2>

                <p className="banner-text">
                  starting at $ <b>20</b>.00
                </p>

                <a href="#" className="banner-btn">
                  Shop now
                </a>
              </div>
            </div>

            <div className="slider-item">
              <img
                src={banner2}
                alt="modern sunglasses"
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">Trending accessories</p>

                <h2 className="banner-title">Modern sunglasses</h2>

                <p className="banner-text">
                  starting at $ <b>15</b>.00
                </p>
                <a href="#" className="banner-btn">
                  Shop now
                </a>
              </div>
            </div>

            <div className="slider-item">
              <img
                src={banner3}
                alt="new fashion summer sale"
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">Sale Offer</p>

                <h2 className="banner-title">New fashion summer sale</h2>

                <p className="banner-text">
                  starting at $ <b>29</b>.99
                </p>

                <a href="#" className="banner-btn">
                  Shop now 
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
