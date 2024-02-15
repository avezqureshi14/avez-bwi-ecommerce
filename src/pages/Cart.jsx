import React, { useState } from "react";
import Header from "../components/navigation/Header";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/actions/cart";
import { NavLink, useNavigate } from "react-router-dom";
const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {})
  );

  const thanksMsg = () => {
    alert("Thanks for making the purchase");
    navigate("/");
    localStorage.removeItem("cart");
    window.location.reload();
  };

  const removeCart = async (id) => {
    console.log(id);
    await dispatch(removeFromCart(id));
  };

  const incre = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };

  const decre = (id) => {
    if (quantities[id] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: prevQuantities[id] - 1,
      }));
    }
  };

  let totalPrice = 0;
  cart.map((item, index) => {
    totalPrice += Number(item.price) * Number(quantities[item.id]);
  });

  console.log(cart.length);

  return (
    <>
      <Header />

      {cart.length === 0 ? (
        <>
          <main style={{ marginTop: "15%", display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column" }} className="checkout">
            Your Cart is Empty! Start Shopping
            <NavLink to="/">
              {" "}
              <button>Shop Now</button>
            </NavLink>
          </main>
        </>
      ) : (
        <>
          <div
            style={{ marginTop: "8%" }}
            className="small-container cart-page sha"
          >
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart?.map((item, index) => {
                  return (
                    <tr>
                      <td>
                        <div className="cart-info">
                          <img src={item?.images[2]} alt="" />
                          <div>
                            <p>{item?.title}</p>
                            <small>Price: ${item?.price}</small>
                            <br />
                            <a href="#" onClick={() => removeCart(item.id)}>
                              Remove
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div
                          className="quantity-container"
                          style={{ display: "flex" }}
                        >
                          <button onClick={() => decre(item.id)}>-</button>
                          <input
                            type="text"
                            value={quantities[item.id]}
                            readOnly
                          />
                          <button onClick={() => incre(item.id)}>+</button>
                        </div>
                      </td>
                      <td>${item.price * quantities[item.id]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="total-price">
              <table>
                <tbody>
                  <tr>
                    <td>Subtotal</td>
                    <td>${totalPrice}.00</td>
                  </tr>
                  <tr>
                    <td>Tax</td>
                    <td>18%</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>${(totalPrice + totalPrice * 0.18).toFixed(1)}</td>
                  </tr>
                  <tr className="checkout" onClick={thanksMsg}>
                    <button>Checkout</button>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
