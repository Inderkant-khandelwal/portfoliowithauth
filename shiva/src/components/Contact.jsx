import React ,{useState , useEffect}from 'react'
import { NavLink } from 'react-router-dom'
const Contact = () => {


   
   const [userData , setUserData] = useState({
    name:'',
    email:'',
    phone:'',
    message:'',
   });
 

   
     const  getContactData = async ()=>{

           try {
            const res = await fetch("/getdata" , {
                method:"GET",
                headers:{
                  
                    "Content-Type":"allication/json"
                 },
                
          })
         const data = await res.json();
        
         setUserData({...userData , name: data.name , email: data.email , phone :  data.phone });
             if(!res.status === 200){
                 throw new Error(res.Error);
             }
                
             
             
           } catch (error) {
               console.log(error);
           }
         
         

     }

  useEffect(()=>{
      getContactData();
  } , [])
  
       
     const cChange = (event)=>{
      const  name  = event.target.name;
        const  value = event.target.value;
        setUserData({...userData  , [name]:value}); 

     }   


   const sendContact = async (e)=>{
        e.preventDefault();
       
        const {name , email , phone , message} = userData;

        // here we are sending the value to the server 
            if(name !== "" && email !== "" && phone !=="" && message !== ""){
              try {
                const res = await fetch("/insertcontact" , {
                  method:'POST',
                  headers:{
                    "Content-Type":"application/json",
                  },
                  body:JSON.stringify({
                   name , email , phone , message
                  })
                 
                 })
               const finRes = await res.json();
                
                  if(res.status === 201){
                    alert("Successfully Send");
                    setUserData({...userData , message:''});
                  } 
                  else{
                    throw new Error("Submission Failed");
                  }
     
     
               } catch (error) {
                   console.log(error);
               }
           
                
            }else{
                alert("All field Required");
            }
           
         


   } 
  
     
   
    return (
        <>
          
        <section className="myCustom_Container">
          <div className="myitem_one_image m-same cn"> 
          </div>
            

          <form method="POST" className="myitem_two_form m-same login-push" onSubmit={sendContact}> 
              <h1 style={{fontWeight:'bolder',fontFamily:'sans-serif',fontSize:'30px',marginTop:'10px'}}>Contact Us</h1>
             
              
              <div className="field-container-parent ">
                
                          <div className="icon-con" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                             <i className="zmdi zmdi-account" style={{fontSize:'25px'}}></i>
                          </div>
                        
                          
                        <div className="field-container-child">
                          <input value={userData.name} className="userClass" type="text" name="name" id="myuser" placeholder="Enter Name"  onChange={cChange} autoComplete="Off" />
                       </div>
                      

             </div>

             

        <div className="field-container-parent">
             
                <div className="icon-con" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                   <i className="zmdi zmdi-email" style={{fontSize:'25px'}}></i>
                </div>
              
                
                <div className="field-container-child">
                  <input value={userData.email} className="userClass" type="text" name="email" id="myemail" placeholder="Enter E-mail"  onChange={cChange} autoComplete="Off" />
               </div>
       </div>
            

    
       <div className="field-container-parent">
             
             <div className="icon-con" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <i className="zmdi zmdi-smartphone-iphone" style={{fontSize:'25px'}}></i>
             </div>
           
             
             <div className="field-container-child">
               <input value={userData.phone} className="userClass" type="text" name="phone" id="myphone" placeholder="Enter Phone"  onChange={cChange} autoComplete="Off" />
            </div>
    </div>
  


    <div className="field-container-parent">
             
             <div className="icon-con" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <i className="zmdi zmdi-lock" style={{fontSize:'25px'}}></i>
             </div>
           
             
             <div className="field-container-child">
               <textarea  style={{resize:'none',height:'100px'}}  className="userClass" type="text" name="message" id="mypass" placeholder="Your Message" value={userData.message} onChange={cChange} autoComplete="Off">
                </textarea>
            </div>
    </div>
         
                 <strong style={{color:'red',marginTop:'40px'}}>Visit Home ? </strong>
            <NavLink to="/"><strong>Visit</strong></NavLink>
         
    <input className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-10 mt-2 rounded cursor-pointer" type="submit"  value="Send Message"/>
               
            


          </form>

         
           
        </section>
    )
        </>
    )
}

export default Contact
