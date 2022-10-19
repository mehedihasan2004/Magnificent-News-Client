import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../../assets/brands/afternoon.jpg";
import Image2 from "../../../assets/brands/lake.jpg";
import Image3 from "../../../assets/brands/ice.jpg";

const BrandCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Image2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Image3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default BrandCarousel;
