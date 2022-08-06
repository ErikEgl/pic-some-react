
import React, { useContext } from "react";
import { UserContext } from "../../utils/useContext";
import { getClass } from "../../utils";

import Image from "../../components/Image/Image";
function Photos() {
  const context = useContext(UserContext);

  const imgs = context.photos.map((img, i) => {
      return (
          <Image isFavorite={img.isFavorite} toggle={context.toggleFavorite} id={img.id} className={getClass(i)} key={i} img={img.url}/>
      )
  })
  return (
    <div className="container">
      <main className="photos">
        {imgs}
      </main>
    </div>
  );
}

export default Photos;
