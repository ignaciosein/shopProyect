import React from 'react'
import { useState, useEffect } from 'react';
import "./Header.css"
import Logo from "../../img/logo.png";
import MenuBurger from "../../img/menuBurger.png";
  import Cart from "../../components/Cart";  
 const Header = () => {


  const [menuBurger ,setMenu] = useState(false)

useEffect(() => {



 
}, [menuBurger])

 



const menuBurgerList = () =>{

 

  let menuList = document.getElementById("menuList")

    if(menuList.style.display="none"){

      menuList.style.display="block"

      
    }
    else if( menuList.style.display="block"){

      menuList="none"
    }



}




  return (
    <div className="Header">
    
    <div className="container1">

                  <div className="Banner">
                    <a href="/"><img src={Logo}></img></a>
                  </div>
                  <div className="divMenu">

                  <div className="LoginIcon">
                  <div className="Login1"></div>
                  <Cart/>

                  </div>
              <div className="menuBurgerIcon">

                <img className="menuBurger" src={MenuBurger} onClick={menuBurgerList}></img>
              </div>

                  </div>

                  </div>  
        <div id="menuList" className="container2">dadas</div>
        <div id="cartList" className="container3"> </div>

    </div>
  )
}

export default Header;