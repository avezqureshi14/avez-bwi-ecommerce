import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/products";
import Loading from "../components/common/Loading";
import { NavLink } from "react-router-dom";
const Search = () => {
  const [query, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const productsArray = useSelector((state) => state.products.products);

  const filterProducts = productsArray?.filter((item) =>
    item?.title.toLowerCase().includes(query.toLowerCase())
  );
  let products = productsArray;
  if (query) {
    products = filterProducts;
  }
  if (!products) {
    return <Loading />;
  }
  console.log(query);

  return (
    <>
      <div className="header-main">
        <div className="container">
          <NavLink to="/" className="header-logo">
            <h2>Avez.</h2>
          </NavLink>

          <div className="header-search-container">
            <input
              type="search"
              name="search"
              className="search-field"
              placeholder="Enter your product name..."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-btn">
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
      <div style={{ margin: "2rem" }} className="product-container">
        <div className="container">
          <div className="product-box">
            <div className="product-main">
              <h2 className="title">All Products</h2>
              <div className="product-grid">
                {products &&
                  products?.map((item, index) => {
                    const deletePrice = item.price + item.price * 0.15;
                    return (
                      <div className="showcase">
                        <div className="showcase-banner">
                          <div className="product-image">
                            <img
                              src={item?.images?.[0]}
                              alt={item?.title}
                              width="300"
                              className="product-img default"
                            />
                          </div>
                          <div className="product-image">
                            <img
                              src={item?.images?.[1]}
                              alt={item?.title}
                              width="300"
                              className="product-img hover"
                            />
                          </div>

                          <p className="showcase-badge">15%</p>

                          <div className="showcase-actions">
                            <button className="btn-action">
                              <ion-icon name="eye-outline"></ion-icon>
                            </button>

                            <button className="btn-action">
                              <ion-icon name="bag-add-outline"></ion-icon>
                            </button>
                          </div>
                        </div>

                        <div className="showcase-content">
                          <a href="#" className="showcase-category">
                            {item?.category}
                          </a>

                          <a href="#">
                            <h3 className="showcase-title">{item?.title}</h3>
                          </a>

                          <div className="showcase-rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                          </div>

                          <div className="price-box">
                            <p className="price">${item?.price}</p>
                            <del>${deletePrice.toFixed(1)}</del>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
