import React from "react";
import { useContext } from "react";
import { UserContext } from "../../utils/useContext";

function Cart() {
  const context = useContext(UserContext);
  return (
    <>
      <main className="cart-page">
        <h1>Check out</h1>
        <h1>{context}</h1>
      </main>
    </>
  );
}

export default Cart;
