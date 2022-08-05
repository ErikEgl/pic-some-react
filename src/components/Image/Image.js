import React from "react";
function Image(props) {
  return (
    <>
      <div className={`${props.className} image-container`}>
        <img src={props.img} alt="pic" className="image-grid" />
      </div>
    </>
  );
}

export default Image;
