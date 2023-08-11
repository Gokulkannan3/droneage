import React from "react";
import Slider from "react-slick";

const ImageSlider = ({images}) => {
    const settings ={
        dots:true,
        infinite:true,
        speed:500,

    }
    return(
        <div className="image-slider">
            <Slider {...settings}>
                {images.map((imageUrl, index) => (
                <div key={index} >
                    <img src={imageUrl} alt={`Slide ${index}`} />
                </div>
                ))}
            </Slider>
        </div>
    )
}

export default ImageSlider