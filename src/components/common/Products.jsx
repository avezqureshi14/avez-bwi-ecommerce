import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Product from "./Product";
const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (priceRange) => {
    setSelectedPriceRange(priceRange);
  };



  return (
    <>
      <div className="product-container">
        <div className="container">
          <Sidebar onCategoryChange={handleCategoryChange}  onPriceChange={handlePriceChange} />
          <div className="product-box">
            <div className="product-main">
              <h2 className="title">New Products</h2>
              <div className="product-grid">
                <Product selectedCategory={selectedCategory} selectedPriceRange={selectedPriceRange} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
