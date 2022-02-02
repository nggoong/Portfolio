import React from 'react';

const CarouselItem = ({ value }) => {

    return(
        <div className="carousel-item-container">
            <div className="carousel-item-wrapper">
                <div className="carousel-contents">
                    <div className="carousel-contents-image">
                        <h1>Photo</h1>
                    </div>
                    <div className="carousel-contents-main">
                        <h1>{value.mainTitle}</h1>
                        <h2>{value.subTitle}</h2>
                        <p>{value.text}</p>
                    </div>
                </div>
                <div className="carousel-links">
                    {value.links}
                </div>
            </div>
        </div>
    )
}

export default CarouselItem;