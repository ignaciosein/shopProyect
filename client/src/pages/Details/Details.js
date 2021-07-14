import React ,{useEffect,useState} from 'react';
import {useParams, Link} from "react-router-dom";
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
     
     { productDetails.length ===0 ?  <div className="Details">  <h4>No se puede mostrar información del artículo</h4> <img src="https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png"></img> <button ><Link to={`/products`}>Regresar</Link></button>  </div>:
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
                <div class="box-description-details"><h4>Fabricante: <Link to={`/products/detailsBrand/${productDetails.Brand}`}>  {productDetails.Brand} </Link></h4>   </div> 
                <button ><Link to={`/products`}>Regresar</Link></button>

                 
              </div>
             
            </div>
         
          }



     
    </div>
  )
}

export default Details
