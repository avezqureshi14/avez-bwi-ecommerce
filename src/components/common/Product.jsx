import React, { useEffect } from "react";
import img1 from "../../assets/images/products/jacket-3.jpg";
import img2 from "../../assets/images/products/jacket-4.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/products";
import Loading from "../common/Loading";
import { addToCart } from "../../redux/actions/cart";
import {useNavigate} from "react-router-dom"
const Product = ({ selectedCategory, selectedPriceRange }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const productsArray = useSelector((state) => state.products.products);

  const filterProducts = (products, category, priceRange) => {
    let filteredProducts = products;
    if (category) {
      filteredProducts = filteredProducts.filter(
        (item) => item.category === category
      );
    }

    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      filteredProducts = filteredProducts.filter(
        (item) => item.price >= min && item.price <= max
      );
    }

    return filteredProducts;
  };

  const goToCart = () =>{
      navigate("/cart")
  }

  const addCart = async (product) => {
    await dispatch(addToCart(product));
  };
  const cart = useSelector((state)=>state.cart.cart);
  const products = filterProducts(
    productsArray,
    selectedCategory,
    selectedPriceRange
  );

  if (!products) {
    return <Loading />;
  }

  return (
    <>
      {products &&
        products?.map((item, index) => {
          const deletePrice = item.price + item.price * 0.15;
          const change = cart.map((cartItem) => cartItem.id === item.id);
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
                  <button onClick={()=>addCart(item)} className="btn-action">
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
    </>
  );
};

export default Product;
