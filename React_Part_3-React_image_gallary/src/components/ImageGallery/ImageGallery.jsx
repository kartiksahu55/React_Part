import React, { useEffect } from "react";
import style from "./ImageGallery.module.css";

const ImageGallery = ({ imageUrl, imageClickHandler }) => {
  return (
    <div onClick={imageClickHandler} className={style.imageContainer}>
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default ImageGallery;
