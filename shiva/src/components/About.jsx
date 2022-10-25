import React , {useEffect , useState }from 'react'
import { NavLink , useHistory , Redirect} from 'react-router-dom'

const About = () => {
   const abortController = new AbortController();
   const signal = abortController.signal; 
   const history = useHistory();
   const [is_login , setLogin] = useState("false");
   const [userData , setUserData] = useState({});

   
     const chekUserLoginStatus = async ()=>{

           try {
            const res = await fetch("/about" , {
                signal:signal,
                method:"GET",
                headers:{
                    Accept:'application/json',
                    "Content-Type":"allication/json"
                 },
                 credentials:"include"
 
          })
         const data = await res.json();
        
         setUserData(data);
         setLogin(true);
         console.log(is_login);
               if(!res.status === 200){
                 throw new Error;
               }
                
             
             
           } catch (error) {
              history.push("/Login");
           }
         
         

     }

  useEffect(()=>{
      chekUserLoginStatus();
    
        return()=>{
            abortController.abort();
        }
      
      
  } , [])


    return (
        <>
           {
               is_login && is_login !== null ?  
               

              
               <section className="myCustom_Container">
          <div className="myitem_one_image m-same abt"> 
          </div>
            

          <form method = "GET" className="myitem_two_form m-same login-push"> 
              <h1 style={{fontWeight:'bolder',fontFamily:'sans-serif',fontSize:'30px',marginTop:'0px'}}>Profile</h1>
             
              
           
                    
             <div className="min-w-screen max-h-screen pt-2 animated fadeIn faster inset-0  outline-none focus:outline-none">
<div className="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
	<div className="flex items-center justify-between">
		<div className="flex items-center">

        <i className="zmdi zmdi-check-circle-u" style={{fontSize:'30px'}}></i>
			<div className="flex flex-col ml-3">
				<div className="font-medium leading-none">User Id ? </div>
				<p className="text-sm text-gray-600 leading-none mt-1 text-red-600">{userData._id}
				</p>
			</div>
		</div>
	</div>
</div>
</div>
         
             
               
                    
         <div className="min-w-screen max-h-screen pt-2 animated fadeIn faster inset-0  outline-none focus:outline-none">
<div className="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
	<div className="flex items-center justify-between">
		<div className="flex items-center">

        <i className="zmdi zmdi-check-circle-u" style={{fontSize:'30px'}}></i>
			<div className="flex flex-col ml-3">
				<div className="font-medium leading-none">Name & E-mail ? </div>
				<p className="text-sm text-gray-600 leading-none mt-1 text-red-600">{userData.name  + " and " + userData.email}
				</p>
			</div>
		</div>
	</div>
</div>
</div>

            
  
                    
<div className="min-w-screen max-h-screen pt-2 animated fadeIn faster inset-0  outline-none focus:outline-none">
<div className="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
	<div className="flex items-center justify-between">
		<div className="flex items-center">

        <i className="zmdi zmdi-check-circle-u" style={{fontSize:'30px'}}></i>
			<div className="flex flex-col ml-3">
				<div className="font-medium leading-none">Phone & Profession ? </div>
				<p className="text-sm text-gray-600 leading-none mt-1 text-red-600">{userData.phone + " and " + userData.work}
				</p>
			</div>
		</div>
	</div>
</div>
</div>
    

    
                    
 

   
           
 


                 <strong style={{color:'red',marginTop:'20px'}}>Visit Home ?  </strong>
            <NavLink to="/"><strong>Visit</strong></NavLink>
         
               
            


          </form>

         
           
              </section>  
              :
              history.push("/Login")
            
           }
    
           
             
                
            

           
        
       
    )
        </>
    )
}

export default About

