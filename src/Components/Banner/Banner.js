import React,{useState} from 'react'
import {Carousel} from 'react-bootstrap'
import banner1 from '../../Assets/images/bannerImg/banner_1.jpg'
import banner2 from '../../Assets/images/bannerImg/banner_2.jpg'

const bannerStyle = {
    height : "20%",
}
const captionStyle = {
    top : "30%",
    bottom : ""
}
export default function Banner() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <div>
      <Carousel  activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            src={banner1}
            alt="Expert Chefs"
          />
          <Carousel.Caption style = {captionStyle}>
            <h3>EXPERT CHEFS</h3>
            <p>We are the best Chefs in town to bring out best flavours to you plate</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={banner2}
            alt="Delicious Food"
          />
  
          <Carousel.Caption style = {captionStyle}>
            <h3>DELICIOUS FOOD</h3>
            <p>Choose from thousand of recipes and flavours</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
