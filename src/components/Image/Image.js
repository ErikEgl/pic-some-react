import React from "react";
function Image(props) {

  const [hovered, setHovered] = React.useState(false)

  function onEnter() {
    setHovered(prevState => !prevState)
  }
  function onLeave() {
    setHovered(prevState => !prevState)
  }

  return (
    <>
      <div onMouseEnter={onEnter} onMouseLeave={onLeave}  className={`${props.className} image-container`}>
        <img src={props.img} alt="pic" className="image-grid" />
        {(hovered || props.isFavorite) && <i onClick={() => props.toggle(props.id)} className={`${props.isFavorite ? 'ri-heart-fill' : 'ri-heart-line'} favorite`}></i>}
        {hovered && <i className="ri-add-circle-line cart"></i>}
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
