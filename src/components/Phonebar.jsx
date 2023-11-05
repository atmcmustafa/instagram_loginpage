import { useEffect, useState } from "react";
import phone from "../../images/home-phones.png";
import image1 from "../../images/screenshot1.png";
import image2 from "../../images/screenshot2.png";
import image3 from "../../images/screenshot3.png";
import image4 from "../../images/screenshot4.png";

const Phonebar = () => {
  const images = [image1, image2, image3, image4];

  const [currentImage, setCurrentImage] = useState(0);
  const [isImageVisible, setImageVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageVisible(false);

      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setImageVisible(true);
      }, 1000);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <div className="relative w-[380.31] h-[581.14]">
        <img src={phone} />
        <div className="absolute top-7 right-[58px]">
          <img
            className={`w-full h-full transform transition-opacity duration-500 ${
              isImageVisible
                ? "opacity-100 transition-opacity"
                : "opacity-5 transition-opacity"
            }`}
            src={`${images[currentImage]}`}
            alt={`Image ${currentImage + 1}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Phonebar;
