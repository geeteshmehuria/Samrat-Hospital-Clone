import React from "react";
import "../Css/listingPage.css";
import image1 from '../hospital_images/image1.jpg';
import image2 from '../hospital_images/image2.jpg';
import image3 from '../hospital_images/image3.jpg';
import image4 from '../hospital_images/image4.jpg';
import image5 from '../hospital_images/image5.jpg';
import image6 from '../hospital_images/image6.jpg';
import image7 from '../hospital_images/image7.jpg';
import image8 from '../hospital_images/image8.jpg';
import image9 from '../hospital_images/image9.jpg';
import image10 from '../hospital_images/image10.jpg';
import image11 from '../hospital_images/image11.jpg';
import image12 from '../hospital_images/image12.jpg';
import image13 from '../hospital_images/image13.jpg';
import image14 from '../hospital_images/image14.jpg';


const colors = [image2, image1, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14];
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
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((imageArr, index) => (
            <div key={index} className="slide">
                <img src={imageArr} alt='Dan Abramov' />
            </div>
          ))}
        </div>
      </div>
    );
  }