import React from 'react'
import "./Header.css"
import Logo from "../../img/logo.png";
import MenuBurger from "../../img/menuBurger.png";
 const Header = () => {
  return (
    <div className="Header">
    
    <div className="container1">

                  <div className="Banner">
                    <a href="/"><img src={Logo}></img></a>
                  </div>
                  <div className="divMenu">

                  <div className="LoginIcon"></div>
              <div className="menuBurgerIcon">

                <img className="menuBurger" src={MenuBurger}></img>
              </div>

                  </div>

                  </div>  
        <div className="container2">dadas</div>

    </div>
  )
}

export default Header;