// import React, { Component } from 'react'

// export default class HomeSlider extends Component {
//     render() {
//         return (
//             <div>
//                 Home Slider
//             </div>
//         )
//     }
// }
import React from 'react';
import { Slide } from 'react-slideshow-image';
 
const slideImages = [
  'https://react-slideshow.herokuapp.com/images/slide_2.jpg',
  'https://react-slideshow.herokuapp.com/images/slide_3.jpg',
  'https://react-slideshow.herokuapp.com/images/slide_4.jpg',
  'https://react-slideshow.herokuapp.com/images/slide_5.jpg',
  'https://react-slideshow.herokuapp.com/images/slide_6.jpg'
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const HomeSlider = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
            
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default HomeSlider;