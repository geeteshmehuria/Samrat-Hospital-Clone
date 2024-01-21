import React from "react";
import "../Css/listingPage.css";
import image16 from "../hospital_images/image16.jpeg";
import image17 from "../hospital_images/image17.jpeg";
import image18 from "../hospital_images/image18.jpeg";
import image1 from "../hospital_images/image1.jpg";
import image5 from "../hospital_images/image5.jpg";
import image6 from "../hospital_images/image6.jpg";
import image3 from "../hospital_images/image3.jpg";
import image11 from "../hospital_images/image11.jpg";
import image13 from "../hospital_images/image13.jpg";
import image15 from "../hospital_images/image15.jpg";
import image19 from "../hospital_images/image19.jpg";
import image20 from "../hospital_images/image20.jpg";

const colors = [
  image15,
  image16,
  image17,
  image18,
  image1,
  image3,
  image5,
  image6,
  image11,
  image13,
  image19,
  image20,
];
const delay = 2500;

const Infinite_Carousel = React.memo(() => {
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
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)`}}
      >
        {colors.map((imageArr, index) => (
          <div
            key={index}
            style={{backgroundImage: `url(${imageArr})`}}
            className="slide"
          ></div>
        ))}
      </div>
    </div>
  );
})

export default Infinite_Carousel;