import React,{useState} from "react"
import AboutAuth from './AboutAuth'
import icon2 from '../../assets/bg1.jpg'
import './Auth.css'

const Auth =()=>{
    

    const [isSignup,setIsSignup]=useState(false)
    

    const handleSwitch=()=>{
        setIsSignup(!isSignup)
    }

     
    return (
        <section className="auth-section">
            
            {isSignup && <AboutAuth/> }
            <div className="auth-container">
                <img className="auth-img" src={icon2} width={600} height={550} alt=""/>
                
                <form >
                    {isSignup ? <p className="Log-text">User Signup</p>:<p className="Log-text">User Login</p> }
                   
                    {
                        isSignup && 
                        (
                            <label htmlFor="name">
                                
                                <input type="text" name="name" id="Name" placeholder="Name" />
                            </label>
                        )
                    }
                    <label htmlFor='email'>
                        
                        <input type="email" name="email" id="email" placeholder='Email' />
                    </label>
                    
                    <label htmlFor='password'>
                        
                        
                        <input type="password"  name="password" id="password" placeholder='Password'  />
                        
                        {!isSignup && 
                           <p  className="fp-p" >
                            Forget Password ?
                            </p>
                        }
                            
                        {isSignup && 
                        <p className="pw-p">Password Must Contain atleast 8 characters 
                         including it must contain atleast one number 
                         Uppercase , Lowercase and Special Character .
                        </p>}

                    </label>
                    

                    <button type ="submit" className="auth-btn">{isSignup? "Sign Up":"Log In"}</button>
                    {isSignup && (
                        <p style={{color:"#666767",fontSize:"13px"}}>
                            By Clicking "Sign Up", you agree to our
                            <span style={{color:"#007ac6"}}> terms of Service </span>,
                            <span style={{color:"#007ac6"}}> privacy policy</span> and cookie policy.
                        </p>
                    )}
                    <p className="ft_content">
                        {isSignup?'Already A Member ? ':"Create Account !"}
                        <button type="button" className="handle-switch-btn"  onClick={handleSwitch}>{isSignup?"Log In":"Sign Up"}</button>
                    </p>
                </form>
                
            </div>
        </section>
    )
}

export default Auth