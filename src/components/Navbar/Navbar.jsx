import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = ()=>{
    var User = null;
    
    const [fix,setFix] = useState(false)

    function setFixedSidebar(){
    
        if(window.scrollY >=400){
            setFix(true)
        }
        else{
            setFix(false)
        }
    }
    
    window.addEventListener("scroll",setFixedSidebar)
    
    
    
    return (
        <nav className={fix ? 'nav-main fixed':'nav-main'}>
            <div className='navbar'>
                <div className='logo-img'>
                    <Link to='/' className='img-nav'>
                        
                        <img width="60" height="60" src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/ffffff/external-drone-blogger-vitaliy-gorbachev-fill-vitaly-gorbachev.png" alt="drone"/>
                        <h1>Dronage</h1>
                    </Link>
                    <form >
                        <input type="text" placeholder='Search' width='200px' />
                        <img width="25" height="25" src="https://img.icons8.com/fluency-systems-regular/48/search--v1.png" alt="search--v1"/>
                    </form>
                </div>
                <div className='nav-right'>
                    <div className='content-page'>
                        <Link to='/' className='link-hd'>
                            Home
                        </Link>
                        <Link to='/contact' className='link-hd'>
                            Contact
                        </Link>
                        <>
                        { User===null ? 
                        <Link to='/login' className='nav-btn'>Log In</Link>
                        :
                        <Link to='/login' className='nav-btn'>Log out</Link>
                        }

                        </>
                    </div>
                    
                </div>
            </div>
                   
            
        </nav>
    )
}

export default Navbar
