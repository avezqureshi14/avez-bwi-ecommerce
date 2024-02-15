import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/products";
import Loading from "../components/common/Loading";
import { NavLink, useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/actions/cart";
const Search = () => {
  const [query, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    setIsLoggedIn(!!profile);
  }, []);
  const cart = useSelector((state) => state.cart.cart);
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

  const goToCart = () => {
    navigate("/cart");
  };

  const removeCart = async (id) => {
    console.log(id);
    await dispatch(removeFromCart(id));
  };

  const addCart = async (product) => {
    await dispatch(addToCart(product));
  };
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
      <div style={{ margin: "2rem" }} className="product-container">
        <div className="container">
          <div className="product-box">
            <div className="product-main">
              <h2 className="title">All Products</h2>
              <div className="product-grid">
                {products &&
                  products?.map((item, index) => {
                    const deletePrice = item.price + item.price * 0.15;
                    const isProductInCart = cart.some(
                      (cartItem) => cartItem.id === item.id
                    );

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
                            {!isProductInCart && (
                              <button
                                onClick={() => addCart(item)}
                                className="btn-action"
                                title="Add to Cart"
                              >
                                <ion-icon name="bag-add-outline"></ion-icon>
                              </button>
                            )}
                            {isProductInCart && (
                              <>
                                <button
                                  onClick={goToCart}
                                  title="Go to Cart"
                                  className="btn-action"
                                >
                                  <ion-icon name="cart-outline"></ion-icon>
                                </button>
                                <button
                                  onClick={() => {
                                    removeCart(item.id);
                                  }}
                                  title="Remove From Cart"
                                  className="btn-action"
                                >
                                  <ion-icon
                                    title="Remove From Cart"
                                    name="trash-outline"
                                  ></ion-icon>
                                </button>
                              </>
                            )}
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
