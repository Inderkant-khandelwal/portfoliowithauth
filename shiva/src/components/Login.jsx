import React , {useState , useContext} from 'react';
import { NavLink , useHistory } from 'react-router-dom';
import {Usercontext} from '../App';
const Login = () => {
  const {state , dispatch}  = useContext(Usercontext);

      const history = useHistory();
    const [loginVal , loginSetVal] = useState({
        email:"",
        password:""
    });
      
    let name , value;
    const loginFun = (event)=>{
        name = event.target.name;
        value = event.target.value;

        loginSetVal({...loginVal , [name]:value});

    }
  
     const login = async (e)=>{
         e.preventDefault();
         const {email , password} = loginVal;

         if(email !== "" && password !== ""){
             try{
                const res = await fetch('/login' , {
                    method:'POST',
                    headers:{
                        "Content-Type":"application/json",

                    },
                    body:JSON.stringify({
                        email , password
                    })
                })
                const finalResLogin = await res.json();
                 if(finalResLogin.status === 422){
                   
                    alert('Login Failed');
                    console.log(finalResLogin);
                     
                 }else{
                     console.log("Reducer ke pehle");
                    dispatch({type:'USER' , payload:true});
                    console.log("Reducer ke Baadme");
                    alert('Successfully Login');
                    console.log(finalResLogin);
                    history.push("/");
                   
                    
                 }

             }catch(e){
              
             } 
         }else{
             alert("all fields required");
         }
     }

    return (
        <>
          
        <section className="myCustom_Container">
          <div className="myitem_one_image m-same logimg"> 
          </div>
            

          <form method="POST" className="myitem_two_form m-same login-push" onSubmit={login}> 
              <h1 style={{fontWeight:'bolder',fontFamily:'sans-serif',fontSize:'30px',marginTop:'10px'}}>Log in</h1>
             
              
           

             

        <div className="field-container-parent">
             
                <div className="icon-con" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                   <i className="zmdi zmdi-email" style={{fontSize:'25px'}}></i>
                </div>
              
                
                <div className="field-container-child">
                  <input className="userClass" type="text" name="email" id="myemail" placeholder="Enter E-mail" value={loginVal.email} onChange={loginFun} autoComplete="Off" />
               </div>
       </div>
            

    

  


    <div className="field-container-parent">
             
             <div className="icon-con" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <i className="zmdi zmdi-lock" style={{fontSize:'25px'}}></i>
             </div>
           
             
             <div className="field-container-child">
               <input className="userClass" type="text" name="password" id="mypass" placeholder="Enter Password" value={loginVal.password} onChange={loginFun}  autoComplete="Off" />
            </div>
    </div>
         
                 <strong style={{color:'red'}}>Not a user ? </strong>
            <NavLink to="/Signup"><strong>Sing Up</strong></NavLink>
         
    <input className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-10 mt-2 rounded cursor-pointer" type="submit"  value="Log-in"/>
               
            


          </form>

         
           
        </section>
    )
        </>
    )
}

export default Login

