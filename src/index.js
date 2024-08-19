import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Contactpage } from './Contactpage';
import { Signup } from './Signup';
import { Loginpage } from './Loginpage';
import { Collection } from './Collection';
import { BrowserRouter , Routes , Route } from "react-router-dom"
import { Products } from './Products';
import Checkout from './Component/Products/Checkout';
import { Payment } from './Payment';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>

       <Routes >
         <Route path='/' Component={App} />
         <Route path='/collection' Component={Collection} />
         <Route path='/contact' Component={Contactpage} />
         <Route path='/login' Component={Loginpage} />
         <Route path='/register' Component={Signup} />
         <Route path='/cart' Component={Products} />
         <Route path='/checkout' Component={Checkout} />
         <Route path='/payment' Component={Payment} />
        
       </Routes>
          </BrowserRouter>  
    {/* { <Addtocart/>} */}
    {/* <Collection /> */}
    {/* <Loginpage/> */}
    {/* <Signup/> */}
    {/* <Contactpage/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
