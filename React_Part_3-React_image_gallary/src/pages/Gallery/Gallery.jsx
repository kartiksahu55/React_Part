import React, { useEffect, useState } from "react";
import style from "./Gallery.module.css";
import axios from "axios";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [gallery, setGallery] = useState("");
  const [isLoadingFail, setIsLoadingFail] = useState(false);

  const navigate = useNavigate();

  const loadGallery = async () => {
    try {
      const galleryData = await axios(
        "https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20"
      );
      setGallery(galleryData.data.photos);
      setIsLoading(true);
    } catch (error) {
      setIsLoading(true);
      setIsLoadingFail(true);
    }
  };

  const imageClickHandler = (iData) => {
    navigate("/imageinfo", { state: { imageData: iData } });
  };

  useEffect(() => {
    loadGallery();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={style.galleryContainer}>
          {gallery ? (
            gallery.map((image) => (
              <ImageGallery
                imageClickHandler={() => imageClickHandler(image)}
                key={image.id}
                imageUrl={image.url}
              />
            ))
          ) : (
            <h3>Oops! Something went wrong</h3>
          )}
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default Gallery;
