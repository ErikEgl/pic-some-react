import React, { useContext, useState } from "react";
import PropTypes from "prop-types"
import { UserContext } from "../../utils/useContext";

function CartItem({item, price}) {
    const {toggleCartItem} = useContext(UserContext);
    const [hovered, setHovered] = useState(false);
    function onEnter() {
        setHovered(true);
      }
      function onLeave() {
        setHovered(false);
      }

    return (
        <div className="cart-item">
            <i 
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
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