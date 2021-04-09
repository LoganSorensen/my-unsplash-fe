import React, { useState, useEffect } from "react";

import Photo from "./photo";

const PhotoGallery = ({setImage, images }) => {
  const [firstColumn, setFirstColumn] = useState([]);
  const [secondColumn, setSecondColumn] = useState([]);
  const [thirdColumn, setThirdColumn] = useState([]);

  useEffect(() => {
    let firstColImages = [];
    let secondColImages = [];
    let thirdColImages = [];

    for (let i = 0; i < images.length; i += 3) {
      firstColImages.push(images[i]);
    }
    for (let i = 1; i < images.length; i += 3) {
      secondColImages.push(images[i]);
    }
    for (let i = 2; i < images.length; i += 3) {
      thirdColImages.push(images[i]);
    }
    setFirstColumn(firstColImages);
    setSecondColumn(secondColImages);
    setThirdColumn(thirdColImages);
  }, [images]);

  return (
    <div className="photo-gallery">
      <div className="column column-one">
        {firstColumn.map((image) => (
          <Photo key={image._id} image={image} setImage={setImage} />
        ))}
      </div>
      <div className="column column-two">
        {secondColumn.map((image) => (
          <Photo key={image._id} image={image} setImage={setImage} />
        ))}
      </div>
      <div className="column column-three">
        {thirdColumn.map((image) => (
          <Photo key={image._id} image={image} setImage={setImage} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
