import React  , {useEffect  , useContext} from 'react';
import  {useHistory} from 'react-router-dom';
import {Usercontext} from '../App';
const Logout = () => {
  
     const {state , dispatch} =  useContext(Usercontext);

    //  const abortController = new AbortController();
    //  const signal = abortController.signal;
     const  history = useHistory();

    useEffect(() => {
          
          fetch("/logout" , {
            //   signal:signal,
              method:'GET',
              headers:{
                  Accept:"application/json",
                  "Content-Type":"application/json"
              },

             credentials:"include" 
          }).then((e)=>{
            dispatch({type:'USER' , payload:false});
            history.push("/Login" , {replace:true});
               if(!e.status === 200){
                  throw new Error("Not Log out");
               }
               
             

          }).catch((e)=>{
              console.log(e);
          })



        // return () => {
        //     abortController.abort();
        // }
    }, [])

    return (
        <div>
            <h1>Logout ka page</h1>
        </div>
    )
}

export default Logout
