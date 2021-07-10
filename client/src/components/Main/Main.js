import React from 'react'
import { Route, Switch } from "react-router-dom";


import Home from "../../pages/Home/Home"
import Products  from "../../pages/Products"
 const Main = () => {
  return (
    <div>
    
    <main>
      <div>
   
        <Switch>
        <Route exact path="/" component={Home}   />
        <Route exact path="/products" component={Products}   />
      {/*   <Route  path="/search" component={Search}  */}  
        </Switch>
      
      </div>
      </main>
    </div>
  )
}

export default Main