import React from "react";
import './Home.css'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import img1 from '../../assets/bg1.jpg'
import img2 from '../../assets/bg2.jpg'
import img3 from '../../assets/bg3.jpg'
import img4 from '../../assets/bg4.jpg'
const Home = ()=>{
    const images = [
        {url:img1},
        {url:img2},
        {url:img3},
        {url:img4},
    ];
    const containerStyles = {
        width:'1536px',
        height:'600px',
        margin:'0 auto',
    };
    return(
        <div className="home-page">
            
            <div style={containerStyles}>
                
                <ImageSlider images={images} />
            </div>
            <div className="home-contant">
                <h1>Dronage</h1>
                <h3>Rent the Future's Fields</h3>
                <h2>The Basic of Rental and Services</h2>
            </div>
            
           

        </div>
    )
}

export default Home