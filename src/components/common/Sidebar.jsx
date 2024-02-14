import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/products";
import Loading from "../common/Loading";

const Sidebar = ({ onCategoryChange, onPriceChange }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const handleRadioChange = (event) => {
    const selectedCategory = event.target.value;
    onCategoryChange(selectedCategory);
    console.log(selectedCategory);
  };
  const productsArray = useSelector((state) => state.products.products);
  const products = productsArray?.slice(4);
  const categories = new Set(
    products && products?.map((item, index) => item.category)
  );

  const handlePriceChange = (event) => {
    const selectedPriceRange = event.target.value;
    onPriceChange(selectedPriceRange);
    console.log(selectedPriceRange)
  };

  if (!products) {
    return <Loading />;
  }
  return (
    <div className="sidebar  has-scrollbar" data-mobile-menu>
      <div className="sidebar-category">
        <div className="sidebar-top">
          <h2 className="sidebar-title">Category</h2>

          <button className="sidebar-close-btn" data-mobile-menu-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <ul className="sidebar-menu-category-list">
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn>
              <div className="menu-title-flex">
                <label
                  className="menu-title"
                  style={{
                    textTransform: "capitalize",
                    display: "flex",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="category"
                    value=""
                    onChange={handleRadioChange}
                    style={{ marginRight: "10px" }}
                  />
                  All
                </label>
              </div>
            </button>
          </li>
          {products &&
            categories &&
            Array.from(categories)?.map((item, index) => {
              return (
                <>
                  <li className="sidebar-menu-category">
                    <button
                      className="sidebar-accordion-menu"
                      data-accordion-btn
                    >
                      <div className="menu-title-flex">
                        <label
                          className="menu-title"
                          style={{
                            textTransform: "capitalize",
                            display: "flex",
                            cursor: "pointer",
                          }}
                        >
                          <input
                            type="radio"
                            name="category"
                            value={item?.split("-")[0]}
                            onChange={handleRadioChange}
                            style={{ marginRight: "10px" }}
                          />
                          {item?.split("-")[0]}
                        </label>
                      </div>
                    </button>
                  </li>
                </>
              );
            })}
        </ul>
      </div>
      <div className="sidebar-category">
        <div className="sidebar-top">
          <h2 className="sidebar-title">Price</h2>
          <button className="sidebar-close-btn" data-mobile-menu-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
        <ul className="sidebar-menu-category-list">
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn>
              <div className="menu-title-flex">
              <label
                  className="menu-title"
                  style={{
                    textTransform: "capitalize",
                    display: "flex",
                    cursor: "pointer",
                  }}
                >
                <input
                  type="radio"
                  name="price"
                  value="0-50"
                  onChange={handlePriceChange}
                  style={{ marginRight: "10px" }}
                />
                $0-$50
                </label>
              </div>
            </button>
          </li>
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn>
              <div className="menu-title-flex">
              <label
                  className="menu-title"
                  style={{
                    textTransform: "capitalize",
                    display: "flex",
                    cursor: "pointer",
                  }}
                >
                <input
                  type="radio"
                  name="price"
                  value="50-100"
                  onChange={handlePriceChange}
                  style={{ marginRight: "10px" }}
                />
                $50-$100
                </label>
              </div>
            </button>
          </li>
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn>
              <div className="menu-title-flex">
              <label
                  className="menu-title"
                  style={{
                    textTransform: "capitalize",
                    display: "flex",
                    cursor: "pointer",
                  }}
                >
                <input
                  type="radio"
                  name="price"
                  value="100-150"
                  onChange={handlePriceChange}
                  style={{ marginRight: "10px" }}
                />
                $100-$150
                </label>
              </div>
            </button>
          </li>
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn>
              <div className="menu-title-flex">
              <label
                  className="menu-title"
                  style={{
                    textTransform: "capitalize",
                    display: "flex",
                    cursor: "pointer",
                  }}
                >
                <input
                  type="radio"
                  name="price"
                  value="150-1000"
                  onChange={handlePriceChange}
                  style={{ marginRight: "10px" }}
                />
                $150{"<"}
                </label>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
