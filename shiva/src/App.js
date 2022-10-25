import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Route , Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Error from './components/Error';
import Footer from './components/Footer';
import Logout from './components/Logout';
import { createContext , useReducer} from 'react';
import { initialState , reducer} from './components/reducers/UseReducer';
// import Dashboard from './components/Dashboard';


 const Usercontext = createContext();

 const Router = ()=>{
       return (
             
           <Switch>
           <Route exact  path="/">
                <Home />
          </Route>

          <Route exact path="/About">
                
                <About />
          </Route>

          <Route exact path="/Contact">
                <Contact />
          </Route>

          <Route exact  path="/Login">
                <Login />
          </Route>

          <Route exact path="/Signup">
                <Signup />
          </Route>

          <Route exact path="/Logout">
                <Logout />
          </Route>

          {/* <Route exact path="/Dashboard">
                <Dashboard />
          </Route> */}

         
          <Route>
            <Error />
          </Route>

           
          
           
      </Switch>
       );
 }
  

  
const App = () => {
     
    const [state , dispatch] = useReducer(reducer ,  initialState);
          
   


  return (
       <>
     
                <Usercontext.Provider value ={{state , dispatch}}>
                       <Navbar />
                          
                           <Router />

                       <Footer />
                </Usercontext.Provider>
                
           
          
      </>
      
      
  );
}

export default App;
export {Usercontext}; 