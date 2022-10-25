import React  , {useState , useEffect }from 'react'
import { NavLink } from 'react-router-dom'
import { useReducer } from 'react';


const Home = () => {
     
	   

     

    
	 
	const [userName , setUserName] = useState('');
	const [is_login , setIsLogin] = useState(false);
	 
	
	   
		 const  getHomeData = async ()=>{
	
			   try {
				const res = await fetch("/getdata" , {
					method:"GET",
					headers:{
					  
						"Content-Type":"allication/json"
					 },
					
			  })
			 const data = await res.json();
			
			 setUserName(data.name);
				
			 setIsLogin(true);
				 
				 
			   } catch (error) {
				   console.log(error);
			   }
			 
			 
	
		 }
	
	  useEffect(()=>{
		  getHomeData();
	  } , [])
	  
    return (
        <>
          
        <section className="myCustom_Container">
          <div className="myitem_one_image m-same hm"> 
          </div>
            

          <div className="myitem_two_form m-same login-push"> 
              <h1 style={{fontWeight:'bolder',fontFamily:'sans-serif',fontSize:'30px',marginTop:'10px'}}>
			  {
				is_login ? userName + ' Developer ' : 'We are Developers'
			  }
			  </h1>

	
             
              
           
              <div className="min-w-screen max-h-screen pt-2 animated fadeIn faster inset-0 z-50 outline-none focus:outline-none">
<div className="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
	<div className="flex items-center justify-between">
		<div className="flex items-center">
			<svg xmlns="http://www.w3.org/2000/svg"
				className="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50" fill="none"
				viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
			</svg>
			<div className="flex flex-col ml-3">
				<div className="font-medium leading-none">We Solve Bug's</div>
				<p className="text-sm text-gray-600 leading-none mt-1">Developers / Programmers / Hackers The IT king
				</p>
			</div>
		</div>
		<button mat-icon-button="" className="flex-no-shrink bg-green-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-500 text-white rounded-full">king</button>
	</div>
</div>
</div>
             

             <div className="min-w-screen max-h-screen pt-4 animated fadeIn faster inset-0 z-50 outline-none focus:outline-none">
<div className="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
	<div className="flex items-center justify-between">
		<div className="flex items-center">
			<svg xmlns="http://www.w3.org/2000/svg"
				className="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50" fill="none"
				viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
			</svg>
			<div className="flex flex-col ml-3">
				<div className="font-medium leading-none">We Are Different From Normal People</div>
				<p className="text-sm text-gray-600 leading-none mt-1">Dont Worry We Are Your Friend
				</p>
			</div>
		</div>
		<button mat-icon-button="" className="flex-no-shrink bg-green-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-500 text-white rounded-full">Thank You</button>
	</div>
</div>
</div>
         
             <NavLink to="/Signup">
         <input className="mt-10 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-10 mt-2 rounded cursor-pointer" type="button"  value="Get Started"/>
</NavLink>


          </div>

         
           
        </section>
    )
        </>
    )
}

export default Home
