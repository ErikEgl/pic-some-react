import React, { useContext, useState } from "react";
import PropTypes from "prop-types"
import { UserContext } from "../../utils/useContext";
import useHover from "../../hooks/useHover";
function CartItem({item, price}) {
    const {toggleCartItem} = useContext(UserContext);
    const [hovered, hoverElem] = useHover()

    return (
        <div className="cart-item">
            <i 
            ref={hoverElem}
            onClick={() => toggleCartItem(item)} className={hovered ? `ri-delete-bin-fill` : `ri-delete-bin-line`}></i>
            <img alt={`Cart Item ${item.id}`}  src={item.url} width="130px" />
            <p>{price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem