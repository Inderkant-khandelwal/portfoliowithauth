import React , {useEffect , useState , useContext} from 'react';
import {Route , Switch , Link , NavLink} from 'react-router-dom';
import {Usercontext} from '../App';
import img from "../images/a1.jpeg";

import { FcMenu } from "react-icons/fc";

import { BsHouseFill , BsPersonFill , BsFillCursorFill , BsFillReplyFill , BsPlug} from "react-icons/bs";
import { FiLogOut} from "react-icons/fi";
import {GrClose} from "react-icons/gr";

const Navbar = () => {
  const {state , dispatch} =  useContext(Usercontext);
  const [x , y] = useState(false);

  const [xss , i] = useState(false);

  const openDrawer = ()=>{
    i(true);
  }

  const closeDrawer = ()=>{
    i(false);
  }

  const CondMenu = ()=>{
    if(state){
      return (
        <>
          
          <NavLink exact to="/" activeClassName="Ac">
          <button className="shadow dekhohome bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-2 rounded" type="button">
               Home
           </button>
         </NavLink>
         <NavLink  exact  to="./About"  activeClassName="Ac">
         
         <div className="about same">About</div>
        
         
             </NavLink>

          <NavLink  exact to="./Contact"  activeClassName="Ac">
              <div className="contact same">Contact</div>
         </NavLink>

           
         <NavLink exact  to="/logout"  activeClassName="Ac">
         <div className="signup same">Logout</div>
         </NavLink>
        </>
      )
    }else{
      return (
        <>
              
              <NavLink exact to="/" activeClassName="Ac">
          <button className="shadow  dekhohome bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-2 rounded" type="button">
               Home
           </button>
         </NavLink>
         <NavLink  exact  to="./About"  activeClassName="Ac">
        
         <div className="about same">About</div>
        
         
             </NavLink>

          <NavLink  exact to="./Contact"  activeClassName="Ac">
              <div className="contact same">Contact</div>
         </NavLink>

            <NavLink exact  to="./Login"  activeClassName="Ac">
            <div className="login same">Login</div>
         </NavLink>

         <NavLink exact  to="./Signup"  activeClassName="Ac">
         <div className="signup same">Signup</div>
         </NavLink>

         
         <NavLink exact  to="./Dashboard"  activeClassName="Ac">
         <div className="signup same">Dashboard</div>
         </NavLink>
        </>
      )
    }
  }



  useEffect(() => {
    window.onscroll = ()=>{
           if(window.scrollY >= 1){
            y(true);
           }else{
            y(false);
           }
          
      
        
       
    }
    
  }, [])

    
    
    return (
       <>
         
         <div className={`side-bar-container ${xss ? 'main-con-width-ok' : 'main-con-width-no'}`}>
            <div className={`actualSideBar shadow-2xl ${xss ? 'yestft' : 'notft'}`} 
            
            
            style={{
              
             

              height:'100vh',
              display:'flex',
              flexDirection:'column',
              backgroundColor:'#fff',
              transition: 'width .5s'
            }}>


              <li className="sameli lione font-semibold sds" style={{
               display:'flex',
               justifyContent:'flex-end'
               }} onClick={closeDrawer}>
                 <div className="ripple" 
                 
                 style={{
             
             width:'50px',
             height:'50px',
             
             marginLeft:'3%',
             marginTop:'.5%',
             cursor:'pointer',
              userSelect:'none',
              borderRadius:'100px',
              borderBottom:'none',
              backgroundColor:'#fff'
              
            }}>
               {
                 xss ? 
                 <GrClose  className="ml-2 mt-2 font-bold text-3xl ics" style={{userSelect:'none'}}/>
               :"" }
            </div>
               
             </li>

             { xss ? 
               <>
              <NavLink exact to="/" activeClassName="Acs">
             <li className="sameli lione font-semibold xdf" style={{
               display:'flex',
               justifyContent:'space-between'
               }}  onClick={closeDrawer}>
                Home
                <BsHouseFill/>
             </li></NavLink>


             <NavLink  exact  to="./About"  activeClassName="Acs">
             <li className="sameli litwo font-semibold xdf" style={{
               display:'flex',
               justifyContent:'space-between'
               }}  onClick={closeDrawer}>
               About
               <BsPersonFill/>
             </li></NavLink>


             <NavLink  exact to="./Contact"  activeClassName="Acs">
             <li className="sameli lithree font-semibold xdf" style={{
               display:'flex',
               justifyContent:'space-between'
               }}  onClick={closeDrawer}>Contact
             <BsFillCursorFill/>
             </li>
             </NavLink>


             <NavLink exact  to="./Login"  activeClassName="Acs">
             <li className="sameli lifour font-semibold xdf" style={{
               display:'flex',
               justifyContent:'space-between'
               }}  onClick={closeDrawer}>Login
                <BsFillReplyFill/>
             </li>
             </NavLink>

             <NavLink exact  to="./Signup"  activeClassName="Acs">
                 <li className="sameli lifive font-semibold xdf"  
                 style={{
               display:'flex',
               justifyContent:'space-between'
               }}  onClick={closeDrawer}>Sign Up
                 <BsPlug />
                 </li>
             </NavLink>

             <NavLink exact  to="/logout"  activeClassName="Ac">
             <li className="sameli lisix font-semibold xdf" 
                style={{
               display:'flex',
               justifyContent:'space-between'
               }}  onClick={closeDrawer}>
               Log-Out
               <FiLogOut />
             </li>
             </NavLink> 
              



               </>


             
             
             
              : ""}
             
        

             

           

           

              
            </div>
         </div>

         <header className={`myHeader extraH  ${x === true ? 'shadow-md' : '' }`}>
           
           <div className="ripple" style={{
             
            width:'50px',
            height:'50px',
            
            marginLeft:'3%',
            marginTop:'.5%',
            cursor:'pointer',
             userSelect:'none',
             borderRadius:'100px'
             
           }} onClick={openDrawer}>
              {<FcMenu   className="ml-2 mt-1 font-bold text-4xl ics" style={{userSelect:'none'}}/>}
           </div>

         <div className="logo text-4xl font-bold">
             INDERKANT

         </div>
           
           <CondMenu /> 
           
           
         </header>
       </>
    )
}

export default Navbar
