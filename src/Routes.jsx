import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from './page/Home/Home';



const AllRoutes= ()=>{
    return(
        <Routes>
            <Route exact path ='/home' element={<Home/>}/>   
       
       
       
        </Routes>
        
    )   
}
export default AllRoutes