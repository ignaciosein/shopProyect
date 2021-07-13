import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../img/logo.png";
import MenuBurger from "../../img/menuBurger.png";
import MenuBurgerClose from "../../img/menuBurgerClose.png";
import Cart from "../../components/Cart";
const Header = () => {
  const [menuBurger, setMenu] = useState(false);

  useEffect(() => {}, [menuBurger]);

  const menuBurgerOpen = () => {
    let menuList = document.getElementById("menuList");
    let open = document.getElementById("open");
    let close = document.getElementById("close");

    open.style.display ="none"
    close.style.display ="block"
      menuList.style.display = "block";
    
  };

  
  const menuBurgerClose = () => {
    let menuList = document.getElementById("menuList");
    let open = document.getElementById("open");
    let close = document.getElementById("close");

    open.style.display ="block"
    close.style.display ="none"
      menuList.style.display = "none";
    
  };
    
 

  return (
    <div className="Header">
      <div className="container1">
        <div className="Banner">
          <a href="/">
            <img src={Logo}></img>
          </a>
        </div>
        <div className="divMenu">
          <div className="LoginIcon">
            <div className="Login1"></div>
            <Cart />
          </div>
          <div className="menuBurgerIcon"> <img className="menuBurger"  id="open" src={MenuBurger} onClick={menuBurgerOpen} ></img> <img className="menuBurger" id="close" src={MenuBurgerClose} onClick={menuBurgerClose} ></img>
          </div>
       
        </div>
      </div>
      <div id="menuList" className="container2">
        <ul>
          <li>
          
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>Productos</Link>
          </li>
        </ul>
      </div>
      <div id="cartList" className="container3">
   
      </div>
    </div>
  );
};

export default Header;
