import React , {useState,useEffect} from 'react'
import axios from "axios"

 const Products = () => {


  const [products,setProduts] = useState([])

  useEffect(() => {


    axios('/api/nacho').then((resultado) =>  { 


      console.log() 


      for (let index = 0; index < resultado.data.length; index++) {
    
         setProduts(resultado.data[index])
      }


    } 
    
    
    
    )
 
  
  }, [ ])
    



 

  console.log(products);









  return (
    <div>
      LISTADO DE PRODUCTOS:


      <ul>

    <li>Nombre {products.Name}</li>
    <li>Precio {products.Price}</li>
    <li>Nombre {products.Name}</li>


        
      </ul>

      
    </div>
  )




}

export default Products;