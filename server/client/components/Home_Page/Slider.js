import React from "react";
import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import cc from "../Images/cc.jpg";
import "./slider.css";
function Slider({ img, Description }) {
  console.log(img);
  return (
    <div className="back">
      <div className="container--Slide">
        <div className="slider">
          <Carousel variant="dark" className="ww">
            <Carousel.Item>
              <img
                src={img.cc}
                width="100%"
                height="600px"
                alt="managers"
                
              />
              <Carousel.Caption>
                <h5>{Description}</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img.cc} width="100%" height="600px" alt="managers" />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img.cc} width="100%" height="600px" alt="managers" />
              <Carousel.Caption>
                <h5>{Description}</h5>
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
  );
}
export default Slider;
