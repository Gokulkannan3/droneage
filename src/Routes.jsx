import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from './page/Home/Home';
import Login from './page/Login/Login'; 


const AllRoutes= ()=>{
    return(
        <Routes>
            <Route exact path ='/' element={<Home/>}/>
            <Route exact path='/login' element={<Login/>}/>
       
       
        </Routes>
        
    )   
}
export default AllRoutes