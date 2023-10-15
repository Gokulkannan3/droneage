import React, { useState } from "react";
import './ImageSlider.css'
const ImageSlider = ({images}) => {
    const [currentIndex,setCurrentIndex]=useState(0)
    const isFirstSlide = currentIndex === 0
    const isLastSide = currentIndex === images.length-1
    const sliderStyles = {
        height:'100%',
        position:'relative',
    }
    const slideStyles = {
        width:'100%',
        height:'100%',
        borderRadius:'5px',
        backgroundPosition:'center',
        backgroundSize:'cover', 
        backgroundImage:`url(${images[currentIndex].url})`,
    }
    const leftArrowStyles = {
        position:'absolute',
        top:'50%',
        transform:'translate(0,-50%)',
        left:'32px',
        fontSize:'70px',
        color:'#fff',
        zIndex:1,
        cursor:'pointer'
    }
    const rightArrowStyles = {
        position:'absolute',
        top:'50%',
        transform:'translate(0,-50%)',
        right:'32px',
        fontSize:'70px',
        color:'#fff',
        zIndex:1,
        cursor:'pointer'
    }
    
    const goToPrevious = ()=>{
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide? images.length -1 :currentIndex -1;
        setCurrentIndex(newIndex)
    }
    const goToNext = ()=>{
        const isLastSide = currentIndex === images.length-1
        
        const newIndex = isLastSide? 0 :currentIndex +1;
        setCurrentIndex(newIndex)
    }
    const dotsContainerStyles = {
        display:'flex',
        
        justifyContainer:'center',
    }
    const dotStyles = {
        margin:'0 13px',
        cursor:'pointer',
        
        fontSize:'100px',
        
    }

    const goToSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex)
    }
    return(
        
        <div style={sliderStyles} className="image-control1">
            
            <div style={leftArrowStyles} onClick={goToPrevious} >
                
                {!isFirstSlide && 
                    <div className="leftArrow-div">
                        <p className="leftArrow">&lt;</p>
                        <div className="leftArrow-bg"></div>
                    </div>
                }
                
            </div>
            <div style={rightArrowStyles} onClick={goToNext} className="rightArrow">
                {!isLastSide && 
                    <div className="rightArrow-div">
                        <p className="rightArrow">&gt;</p>
                        <div className="rightArrow-bg"></div>
                    </div>
                } 
                
            </div>
            <div className="image-control"></div>
            <div style={slideStyles}></div>
            <div style={dotsContainerStyles} className="dotsStyle">
                {images.map((image,slideIndex) => (
                    <div key={slideIndex} className="dot-style" style={dotStyles} onClick={()=>goToSlide(slideIndex)}>	.
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default ImageSlider