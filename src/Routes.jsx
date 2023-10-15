import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from './page/Home/Home';
import Login from './page/Login/Login'; 
import Service from './page/service/Service'
import Leaf from './page/lea/leaf'

const AllRoutes= ()=>{
    return(
        <Routes>
            <Route exact path ='/' element={<Home/>}/>
            <Route exact path="/map" element={<Leaf/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/service' element={<Service/>}/>
       
        </Routes>
        
    )   
}
export default AllRoutes