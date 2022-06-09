import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
// import "bootstrap/dist/css/bootstrap.min.css";
import cc from "../Images/cc.jpg";
//import "./slider.css";
export default function Slider({ img1, img2, Description }) {
  console.log(img1);
  return (
    <SliderStyle>
    <div className="back">
      <div className="container--Slide">
        <div className="slider">
          <Carousel variant="dark" className="ww">
            <Carousel.Item>
              <img src={img1.cc} width="100%" height="600px" alt="managers" />
              <Carousel.Caption>
                <h4>{Description}</h4>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img2.bb} width="100%" height="600px" alt="managers" />
              <Carousel.Caption>
                <h4>Second slide label</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img1.cc} width="100%" height="600px" alt="managers" />
              <Carousel.Caption>
                <h4>{Description}</h4>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
    </SliderStyle>
  );
}
const SliderStyle=styled.div`

.back{
    background-color: #ddd;
    height: 100%;
}
.back .container--Slide{
    width: 100%;
    height: 100%;
    margin: 0;
}
.back .container--Slide .slider{
    height: 100%;
}
.back .container .slider{
    height: 600px;
    width: 100%;
}
.carousel{
    height: 100%;
}
.carousel-inner{
    height: 100%;
}
.carousel-item{
    height: 100%;
}
.carousel-item img{
    height: 100%;
}
h4{
    font-size: 1.2rem !important;
    color: white;
}
p{
    font-size: 1rem !important;
    color: white;
}
.carousel-control-prev span,.carousel-control-next span{
    width: 30px;
    height: 30px;
    
}
`