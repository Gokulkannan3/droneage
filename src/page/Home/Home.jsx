import React from "react";
import './Home.css'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import img1 from '../../assets/bg1.jpg'
import img2 from '../../assets/bg2.jpg'
import img3 from '../../assets/bg3.jpg'
import img4 from '../../assets/bg4.jpg'
const Home = ()=>{
    const images = [
        img1,
        img2,
        img3,
        img4,
    ];
    
    return(
        <div className="home-page">
           <ImageSlider images={images}/>
            
        </div>
    )
}

export default Home