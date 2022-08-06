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
        {hovered && <i className="ri-heart-line favorite"></i>}
        {hovered && <i className="ri-add-circle-line cart"></i>}
      </div>
    </>
  );
}

export default Image;
