import React, { useContext } from "react";
import { UserContext } from "../../utils/useContext";
import CartItem from "../../components/CartItem/CartItem";

function Cart() {
  const { cartItems, placeOrder, ordering } = useContext(UserContext);
  const cartItemElements = cartItems.map((item) => (
    <CartItem price={5.99} key={item.id} item={item} />
  ));
  let pricetotal
  let price = cartItemElements.map((item) => {
    return pricetotal =+ +item.props.price;
  });
  const priceSum = price.reduce((partialSum, a) => partialSum + a, 0);
  return (
    <main className="cart-page">
      <h1>{cartItems.length ? "Check out" : "Check out is empty"}</h1>
      {cartItemElements}
      {cartItems.length > 0 && <p className="total-cost">Total: {priceSum}</p>}
      {cartItems.length > 0 && <div className="order-button">
        <button onClick={placeOrder}>{ordering ? "Ordering..." : "Place Order"}</button>
      </div>}
    </main>
  );
}

export default Cart;
