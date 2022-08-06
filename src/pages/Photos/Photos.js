
import React, { useContext } from "react";
import { UserContext } from "../../utils/useContext";
import { getClass } from "../../utils";

import Image from "../../components/Image/Image";
function Photos() {
  const context = useContext(UserContext);

  const imgs = context.photos.map((img, i) => {
      return (
          <Image key={img.id} img={img} className={getClass(i)} />
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
