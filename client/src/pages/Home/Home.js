 import React  from 'react';
 import {Link} from "react-router-dom";
 
 
 const Home = () => {
   return (
     <div>
       
       PAGINA HOME

    <button><Link to={"/products"}>VER PRODUCTOS</Link></button>
    <button><Link to={"/addproducts"}>AÑADIR PRODUCTOS</Link></button>
 
     </div>
   )
 }

 export default Home
 