import React from 'react';
import { Slide } from 'react-slideshow-image';
import logo from '../../assets/slika1.jpg';
import logo1 from '../../assets/slika2.png';
import './slider.css';
import 'react-slideshow-image/dist/styles.css'


const images = [logo, logo1];

const properties = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    pauseOnHover: true,
    arrows: false,
  };
  
  const Slideshow = () => {
      return (
        <div className="slide-container">
          <Slide {...properties}>
            <div className="each-slide">
              <div 
                style={{'backgroundImage':`url(${images[0]}`}}
              >
                <h2>Programiranje za Unix</h2>
              </div>
            </div>
            <div className="each-slide">
              <div 
                style={{'backgroundImage':`url(${images[1]}`}}
              >
                <h2>Programiranje za Unix</h2>
              </div>
            </div>
          </Slide>
        </div>
      );
    }
  
  export default Slideshow;