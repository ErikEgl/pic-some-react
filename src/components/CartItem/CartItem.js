import React, { useContext } from "react";
import { UserContext } from "../../utils/useContext";

function CartItem({item, price}) {
    const {toggleCartItem} = useContext(UserContext);

    return (
        <div className="cart-item">
            <i  onClick={() => toggleCartItem(item)} className="ri-delete-bin-line"></i>
            <img alt={`Cart Item ${item.id}`}  src={item.url} width="130px" />
            <p>{price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
        </div>
    )
}

export default CartItem