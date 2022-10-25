import React , {useState} from 'react'
import { NavLink, useHistory } from 'react-router-dom'

const Signup = () => {
   const history = useHistory();
     const [forVal , fornewVal] = useState({
         name:'',
         email:'',
         phone:'',
         work:'',
         password:'',
         cpassword:''

     });
     const [errs , seterr] = useState(false);

     const [is_success , setSuccess] = useState("");

      let name , value;
     const signUpFun = (event)=>{
        name = event.target.name;
        value = event.target.value;
          
        fornewVal({...forVal,[name]:value});
      
     }

     const sendData = async (e)=>{
        e.preventDefault();
        const {name , email , phone , work , password , cpassword} = forVal;
         if(name !== "" && email !== "" && phone !== "" && work !== ""  &&  password !== "" && cpassword !== "" ){
             try {
                        const res = await fetch("/register" , {
                            method:'POST',
                            headers:{
                                "Content-Type":"application/json",
                            },
                            body:JSON.stringify({
                                name , email , phone , work , password , cpassword 
                            })
                        })  
                        
                       const finalRes = await res.json();

                       if(finalRes.status === 422 || !finalRes){
                        setSuccess(false);
                        console.log(finalRes.status);
                        return false;
                       }else{
                        setSuccess(true);
                        console.log(finalRes.status);
                        alert("Registeration Successful");
                        history.push("/Login");

                       }


             } catch (error) {
                  alert('some error occured try again');
             } 
             
           }else{
            seterr(true);
             
           }
     }


     const hideErr = ()=>{
        seterr(false);
        setSuccess("");
     }
    return (
        <section className="myCustom_Container">
          <div className="myitem_one_image m-same"> 
          </div>
            

          <form className="myitem_two_form m-same" method="POST" onSubmit={sendData}> 
              <h1 style={{fontWeight:'bolder',fontFamily:'sans-serif',fontSize:'30px',marginTop:'10px'}}>Sign Up</h1>
               {errs === true ? 
                <span style={{color:'red'}}>Some error in any Form field</span>
                : ""
               }
               {
                   is_success === "" ?
                    "" : is_success === true ?
                   <span style={{color:'green'}}>Registeration Successfull !</span>
                   : is_success === false ? 
                   <span style={{color:'red'}}>Registeration Failed ! Try Again</span>
                   :""
                   
               }
              
              <div className="field-container-parent ">
                
                          <div className="icon-con" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                             <i className="zmdi zmdi-account" style={{fontSize:'25px'}}></i>
                          </div>
                        
                          
                        <div className="field-container-child">
                          <input onFocus={hideErr} className="userClass" type="text" name="name" id="myuser" placeholder="Enter Name" value={forVal.name}  onChange={signUpFun} autoComplete="Off" />
                       </div>
                      

             </div>

             

        <div className="field-container-parent">
             
                <div className="icon-con" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                   <i className="zmdi zmdi-email" style={{fontSize:'25px'}}></i>
                </div>
              
                
                <div className="field-container-child">
                  <input onFocus={hideErr} className="userClass" type="text" name="email" id="myemail" placeholder="Enter E-mail" value={forVal.email}  onChange={signUpFun} autoComplete="Off" />
               </div>
       </div>
            

       <div className="field-container-parent">
             
             <div className="icon-con" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <i className="zmdi zmdi-smartphone-iphone" style={{fontSize:'25px'}}></i>
             </div>
           
             
             <div className="field-container-child">
               <input onFocus={hideErr} className="userClass" type="text" name="phone" id="myphone" placeholder="Enter Phone" value={forVal.phone}  onChange={signUpFun} autoComplete="Off" />
            </div>
    </div>
         

    <div className="field-container-parent">
             
             <div className="icon-con" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <i className="zmdi zmdi-star" style={{fontSize:'25px'}}></i>
             </div>
           
             
             <div className="field-container-child">
               <input onFocus={hideErr} className="userClass" type="text" name="work" id="mywork" placeholder="Enter Profession" value={forVal.work}  onChange={signUpFun} autoComplete="Off" />
            </div>
    </div>
         


    <div className="field-container-parent">
             
             <div className="icon-con" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <i className="zmdi zmdi-lock" style={{fontSize:'25px'}}></i>
             </div>
           
             
             <div className="field-container-child">
               <input onFocus={hideErr} className="userClass" type="text" name="password" id="mypass" placeholder="Enter Password" value={forVal.password}  onChange={signUpFun} autoComplete="Off" />
            </div>
    </div>
         

    <div className="field-container-parent">
             
             <div className="icon-con" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <i className="zmdi zmdi-lock" style={{fontSize:'25px'}}></i>
             </div>
           
             
             <div className="field-container-child">
               <input onFocus={hideErr} className="userClass" type="text" name="cpassword" id="cmypass" placeholder="Confirm Password"  value={forVal.cpassword}  onChange={signUpFun} autoComplete="Off" />
            </div>
    </div>

    <strong style={{color:'red'}}>Already User ? </strong>
            <NavLink to="/Login"><strong>Log in</strong></NavLink>
         
    <input className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-10 mt-2 rounded cursor-pointer" type="submit"  value="Sign-Up"/>
               
            


          </form>

         
           
        </section>
    )
}

export default Signup
