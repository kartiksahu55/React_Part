import React from "react";
import style from "./ImageInfo.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const ImageDetails = () => {
  const location = useLocation();
  const { imageData } = location.state;

  const navigate = useNavigate()
  
  const backHandler=()=>{
    navigate("/")
  }

  return (
    <>
      <div className={style.imageInfoContainer}>
        <div className={style.image}>
          <img
            src={
              imageData.url ||
              "https://api.slingacademy.com/public/sample-photos/6.jpeg"
            }
            alt=""
          />
        </div>
        <div className={style.aboutImageText}>
          <h2>{imageData.title}</h2>
          <p>{imageData.description}</p>
        </div>
      </div>
      <button onClick={backHandler} className={style.backButton}>Back</button>
    </>
  );
};

export default ImageDetails;
