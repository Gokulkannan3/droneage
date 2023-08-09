import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = ()=>{
    var User = null;
    return (
        <nav className='nav-main'>
            <div className='navbar'>
                <div className='logo-img'>
                    <Link to='/' className='img-nav'>
                        <img width="70" height="70" src="https://img.icons8.com/nolan/64/drone.png" alt="drone"/>
                        <h1>Dronage</h1>
                    </Link>
                    <form >
                        <input type="text" placeholder='Search' width='200px' />
                        <img width="25" height="25" src="https://img.icons8.com/fluency-systems-regular/48/search--v1.png" alt="search--v1"/>
                    </form>
                </div>
                <div className='nav-right'>
                    <div className='content-page'>
                        <Link to='/home' className='link-hd'>
                            Home
                        </Link>
                        <Link to='/' className='link-hd'>
                            Contact
                        </Link>
                        <>
                        { User===null ? 
                        <Link to='/' className='nav-btn'>Log In</Link>
                        :
                        <Link to='/' className='nav-btn'>Log out</Link>
                        }

                        </>
                    </div>
                    
                </div>
            </div>
                   
            
        </nav>
    )
}

export default Navbar
