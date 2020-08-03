import React from 'react';
import '../../../assets/scss/view/clientScheduleView/Slider.scss';
import Card from './Card';
import Data from './Data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//Create react-slick slider
export default function SliderView() {
  const renderSlides = () =>
    Data.properties.map((property) => <Card property={property} />);

  return (
    <div className='sliderView'>
      <Slider dots={false} slidesToShow={3} slidesToScroll={3}>
        {renderSlides()}
      </Slider>
    </div>
  );
}
