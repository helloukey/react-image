import { useEffect, useState } from "react";
import { LazyImage } from "../dist/LazyImage";
import placeholderImage from "../assets/placeholder.png";

const ImageList = () => {
  const [photos, setPhotos] = useState(null);
  
  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <div className="imageContainer">
      {photos &&
        photos.map((photo) => (
          <LazyImage
            key={photo.id}
            placeholderSrc={placeholderImage}
            placeholderStyle={{ width: "100%" }}
            src={photo.download_url}
            style={{ width: "100%" }}
          />
        ))}
    </div>
  );
};
export default ImageList;
