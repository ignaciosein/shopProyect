 import React  from 'react';
 import {Link} from "react-router-dom";
 import "./Home.scss"
 import  Logo from "../../img/logo.png"; 
 
 
 const Home = () => {
   return (
     <div className="Background" >
 
     <div className="Home">
       
      <h1> Bienvenido a </h1>
      <img src={Logo}></img>

    <button><Link to={"/products"}>VER PRODUCTOS</Link></button>
   
 
    </div>
     </div>
   )
 }

 export default Home
 