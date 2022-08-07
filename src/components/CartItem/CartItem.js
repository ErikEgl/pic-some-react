import React, { useContext } from "react";
import { UserContext } from "../../utils/useContext";

function CartItem({item}) {
    console.log(item);
    const {toggleCartItem} = useContext(UserContext);
    return (
        <div className="cart-item">
            <i  onClick={() => toggleCartItem(item)} className="ri-delete-bin-line"></i>
            <img alt={`Cart Item ${item.id}`}  src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem