import React from 'react'
import { NavLink } from 'react-router-dom'
const Error = () => {
    return (
        <>
         <div style={{display:'flex' , width:'100%', height:'100vh' , justifyContent:'center' ,flexDirection:'column'}}> 
           <div style={{width:'90%' , height:'70vh' }} className="myFour">
               
           </div>
           <NavLink to="/" style={{display:'flex'}}>
         <input className=" shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-10 mt-2 rounded cursor-pointer " type="button"  style={{width:'200px' , marginLeft:'auto' , marginRight:'auto'}} value="Back to Home"/>
         </NavLink>
         </div>
        </>
    )
}

export default Error
 