import React from "react"

function CartItem({item}) {
    return (
        <div className="cart-item">
            <i className="ri-delete-bin-line"></i>
            <img alt={`Cart Item ${item.id}`}  src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem