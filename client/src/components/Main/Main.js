import React from 'react'
import { Route, Switch } from "react-router-dom";


import Home from "../../pages/Home/Home"
import Products  from "../../pages/Products"
import AddProducts  from "../../pages/AddProducts"
import Details from "../../pages/Details/Details"
import DetailsBrand from "../../pages/DetailsBrand/DetailsBrand";
 
 const Main = () => {
  return (
    <div>
    
    <main>
      <div>
   
        <Switch>
        <Route exact path="/" component={Home}   />
        <Route exact path="/products" component={Products}   />
        <Route exact path="/addproducts" component={AddProducts}   />
        <Route exact path="/products/details/:id" component={Details}   />
        <Route exact path="/products/detailsBrand/:brand" component={DetailsBrand}   />
        
     
      {/*   <Route  path="/search" component={Search}  */}  
        </Switch>
      
      </div>
      </main>
    </div>
  )
}

export default Main