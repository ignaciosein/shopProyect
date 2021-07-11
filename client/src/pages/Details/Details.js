import React ,{useEffect,useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import "./Details.css"


const Details = () => {

  const [productDetails , setProDetails] = useState([])

 const params = useParams();

  console.log(params.id)
  
  useEffect(() => {
    axios(`/api/products/${params.id}`).then((resultado) => {
      console.log(resultado );


      setProDetails(resultado.data)



   
    });
  }, []);

console.log(productDetails)






  return (
    <div>
     
     { 
            <div className="Details">
              <div class="box-img-details">
            <img src={productDetails.Img}></img>  
              </div>
              <div class="box-details">
                <div class="box-titleProd-details"> 

                 {productDetails.Name} 
              
                  <div />
                </div>
                <div class="box-division-details">
                  <div class="box-price-details">{productDetails.Price}€</div>
                </div>
                <div class="box-description-details">{productDetails.Description}</div>
                <div class="box-description-details">Fabricante: <a href={`/products/detailsBrand/${productDetails.Brand}`}>  {productDetails.Brand} </a>  </div> 
               

                 
              </div>
             
            </div>
         
          }



     
    </div>
  )
}

export default Details
