import React from "react";
import "../Css/listingPage.css";
import image1 from "../hospital_images/image1.jpg";
import image2 from "../hospital_images/image2.jpg";
import image3 from "../hospital_images/image3.jpg";
import image4 from "../hospital_images/image4.jpg";
import image5 from "../hospital_images/image5.png";
import image6 from "../hospital_images/image6.png";
import image7 from "../hospital_images/image7.jpg";
import image8 from "../hospital_images/image8.jpg";
import image9 from "../hospital_images/image9.png";
import image10 from "../hospital_images/image10.png";
import image11 from "../hospital_images/image11.png";
import image12 from "../hospital_images/image12.png";
import image13 from "../hospital_images/image13.jpg";
import image15 from "../hospital_images/image15.jpg";

const colors = [
  image15,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
];
const delay = 2500;

export default function Infinite_Carousel() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)`,  borderRadius: "10px", }}
      >
        {colors.map((imageArr, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${imageArr})`,
              backgroundSize: "cover",
             
            }}
            className="slide"
          ></div>
        ))}
      </div>
    </div>
  );
}
