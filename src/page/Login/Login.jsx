import React,{useState} from "react"
import { useNavigate } from "react-router-dom"
import {useDispatch} from 'react-redux'
import AboutAuth from './AboutAuth'
import icon2 from '../../assets/bg1.jpg'
import { signup,login } from '../../actions/auth'
import './Auth.css'

const Auth =()=>{
    
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    const[email,setEmail]=useState('')
    const [isSignup,setIsSignup]=useState(false)
    

    const handleSwitch=()=>{
        setIsSignup(!isSignup)
    }

    
    const dispatch = useDispatch()
    const navigate =useNavigate()  


    const handleSubmit =(e)=>{
        e.preventDefault()
        if(isSignup){
            if(!name||!email || !password ){
                alert("Enter Full Details to SignUP")
            }
            dispatch(signup({name,email,password},navigate))
        }
        else{
            if(!email || !password ){
                alert("Enter Full Details to LogIn")
            }
            dispatch(login({email,password },navigate))
        }
        console.log({name,email,password})
    }


    return (
        <section className="auth-section">
            
            {isSignup && <AboutAuth/> }
            <div className="auth-container">
                <img className="auth-img" src={icon2} width={600} height={550} alt=""/>
                
                <form onSubmit={handleSubmit} >
                    {isSignup ? <p className="Log-text">User Signup</p>:<p className="Log-text">User Login</p> }
                   
                    {
                        isSignup && 
                        isSignup && 
                        (
                            <label htmlFor="name">
                                
                                <input type="text" name="name" id="Name" placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
                            </label>
                        )
                    }
                    <label htmlFor='email'>
                        
                        <input type="email" name="email" id="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
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