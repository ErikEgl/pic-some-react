import React, { useContext } from "react";
import PropTypes from "prop-types";
import { UserContext } from "../../utils/useContext";
function Image({className, img}) {
  const [hovered, setHovered] = React.useState(false);
  const {toggleFavorite, toggleCartItem, cartItems} = useContext(UserContext);
  function onEnter() {
    setHovered((prevState) => !prevState);
  }
  function onLeave() {
    setHovered((prevState) => !prevState);
  }
  const thisEl = cartItems.find(el => el.id === img.id)
  return (
    <>
      <div
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className={`${className} image-container`}
      >
        <img src={img.url} alt="pic" className="image-grid" />
        {(hovered || img.isFavorite) && (
          <i onClick={() => toggleFavorite(img.id)} className={`${img.isFavorite ? "ri-heart-fill" : "ri-heart-line"} favorite`}></i>
        )}
        {(hovered || thisEl) && (
          <i onClick={() => toggleCartItem(img)} className={`${thisEl ? "ri-shopping-cart-fill" : "ri-add-circle-line"} cart`}></i>
        )}
      </div>
    </>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
