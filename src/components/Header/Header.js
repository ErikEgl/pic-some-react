import React, { useContext } from "react";
import { UserContext } from "../../utils/useContext";
import { Link } from "react-router-dom";

function Header() {
  const context = useContext(UserContext);
  console.log(context);
  return (
    <header>
      <div className="container">
      <Link to="/">
        <h2>Pic Some</h2>
      </Link>
      <Link to="/cart">
        {context.cartItems.length ? <div className="cart-wrap"><i className="ri-shopping-cart-fill ri-fw ri-2x"></i><div>{context.cartItems.length}</div></div> : <i className="ri-shopping-cart-line ri-fw ri-2x"></i>}
      </Link>
      </div>
    </header>
  );
}

export default Header;
