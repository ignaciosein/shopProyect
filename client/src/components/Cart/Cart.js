import React from 'react';
import "./Cart.css";
import CartIcon from "../../img/cart.png"
const Cart = () => {


 




  const  openCart = () =>{

    let carrito = document.getElementById("cartList");
    let menuBurger = document.getElementById("menuList");

 if(menuBurger.style.display="block"){

  menuBurger.style.display="none";
  carrito.style.display="block";

  let recoveredData = localStorage.getItem("cart")

  let data = JSON.parse(recoveredData)

  for (let index = 0; index < data.length; index++) {
    
    console.log(data[index].IdProd);
    
 
  }

 


 }
   


  }
  return (
    <div className="Cart">
      <img src={CartIcon} onClick={openCart}></img>
    </div>
  )
}

export default Cart
