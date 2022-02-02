import React from 'react';
import CarouselItem from './CarouselItem';
import CarouselValue from '../../CarouselValue';


const Carousel = () => {


    return(
        <div className="carousel-container">
            <button> prev </button>
            <div className="carousel-viewer">
                <div className="carousel-slider">
                    {CarouselValue.map((value)=>{return(<CarouselItem value={value}></CarouselItem>)})}
                </div>
            </div>
            <button> next </button>
        </div>
    )
}

export default Carousel;