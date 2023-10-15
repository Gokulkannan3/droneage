import React from "react";
import './Home.css'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import img1 from '../../assets/bg.jpg'
import img2 from '../../assets/bg2.jpg'
import img3 from '../../assets/bg3.jpg'
import img4 from '../../assets/bg4.jpg'
import { NavLink } from "react-router-dom";
const Home = ()=>{
    const images = [
        {url:img1},
        {url:img2},
        {url:img3},
        {url:img4},
    ];
    const containerStyles = {
        width:'1519px',
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
            <div className="Drone-Content">
                <div className="DroneCard-Content">
                    <div className="ServiceCard">
                        <h1>Elevate Your Vision: Professional Aerial Drone Services</h1>
                        <p>Experience innovation soaring through the skies. Our expert drone services provide dynamic aerial photography and videography, turning ordinary scenes into extraordinary memories.</p>
                    </div>
                    <div className="Card-details">   
                    </div>
                    
                
                   <div className="Card-details2">
                        <h2>Service We Offer</h2>
                        <p>Unlock the potential of aerial imagery with our cutting-edge drone solutions. From cinematic landscapes to detailed inspections, we bring creativity and precision to every project</p>
                    
                        <NavLink to='/map' className='btn-card'>Get Now</NavLink>
                    </div>
                </div>
                <div className="DroneCard-Content">
                    <div className="ServiceCard">
                        <h1>Looking to rent a drone for capturing aerial footage and heading a specific direction.</h1>
                        <p>"Seeking to rent captivating drone footage for a creative project. Need scenic aerial views and dynamic shots. Please share content options and pricing details."</p>

                    </div>
                    <div className="Card-details1">
                        
                    </div>
                    <div className="Card-details3">
                        <h2>Rental Service</h2>
                        <p>Welcome to our premier Rental Service! We offer a wide range of high-quality equipment for your diverse needs. From cameras and drones to audio gear and lighting setups, 
                            we've got you covered. Our competitive rates,
                            flexible rental periods, and expert guidance ensure a seamless experience.
                            Elevate your projects with top-notch equipment by contacting us today</p>
                        <a href='/map' className="btn-card">Get Now</a>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="footer-content">
                    <div className="footer-left">
                        <h1>Dronage </h1>
                        <p>Dronage is a seamless solution for individuals and businesses seeking to harness the power of drones without the commitment of ownership. Whether you need aerial photography for a special event, site inspections for construction projects, or agricultural surveys for precision farming, our diverse fleet of advanced drones is at your disposal.</p>
                    </div>
                    <div className="footer-right">
                        <div className="service-footer">
                            <h2>
                            Our Services
                            </h2>
                            <ul>
                                <li>About Us</li>
                                <li>Our Work</li>
                                <li>Pricing</li>
                                <li>Help Center</li>
                                <li>Login</li>
                            </ul>
                        </div>
                        <div className="Company-footer">
                            <h2>Company</h2>
                            <ul>
                                <li>Terms of Use</li>
                                <li>Contant Us</li>
                            </ul>
                        </div>
                        <div className="Follow-Footer">
                            <h2>Follow Us</h2>
                            <ul>
                                <li>Facebook</li>
                                <li>Linkedin</li>
                                <li>Instagram</li>
                                <li>Dribble</li>

                            </ul>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="footer-bottom">
                        <h4>Copyright &copy; 2023 Dronage</h4>
                        <h4>Powered By Aravinth</h4>
                </div>
            </div>
           

        </div>
    )
}

export default Home