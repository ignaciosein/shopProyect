import React ,{useEffect,useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";


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
            <div className="box-prod">
              <div class="box-img">
         {/*      <img src={item.Img}></img> */}
              </div>
              <div class="box-details">
                <div class="box-titleProd"> 

                <a href={`/products/${productDetails.IdProd}`}>{productDetails.Name}</a>
              
                  <div />
                </div>
                <div class="box-division">
                  <div class="box-price">{productDetails.Price}€</div>
                </div>
                <div class="box-description">{productDetails.Description}</div>
              </div>
            </div>
         
          }



     
    </div>
  )
}

export default Details
