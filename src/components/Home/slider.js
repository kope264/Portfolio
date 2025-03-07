import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import "./Slider.css"; // Assuming you have a CSS file for styling

const images = [
  { src: "", name: "Fiery-throated hummingbird" },
  { src: "img2.jpg", name: "Golden-browed chlorophonia" },
  { src: "img3.jpg", name: "Pale blue flycatcher" },
  { src: "img4.jpg", name: "Madagascar hoopoe" },
  { src: "img5.jpg", name: "Blue jay" },
  { src: "img6.jpg", name: "Baltimore Oriole Birds" }
];

const Slider = () => {
  const [items, setItems] = useState(images);

  const nextSlide = () => {
    setItems((prev) => [...prev.slice(1), prev[0]]);
  };

  const prevSlide = () => {
    setItems((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  return (
    <div className="container">
      <div className="slide">
        {items.map((item, index) => (
          <div
            key={index}
            className="item"
            style={{ backgroundImage: `url(${item.src})` }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">Lorem ipsum dolor sit amet...</div>
              <button>See More</button>
            </div>
          </div>
        ))}
      </div>
      <div className="button">
        <button className="prev" onClick={prevSlide}><FaArrowLeft /></button>
        <button className="next" onClick={nextSlide}><FaArrowRight /></button>
      </div>
    </div>
  );
};

export default Slider;
