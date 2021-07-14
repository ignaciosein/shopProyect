import React ,{useEffect,useState} from 'react';
import {useParams, Link} from "react-router-dom";
import axios from "axios";
import "./DetailsBrand.css"


const DetailsBrand = () => {

   const [brandDetails , setBrandDetails] = useState([]) 

 const params = useParams();

  console.log(params.brand)
  
  useEffect(() => {
    axios(`/api/brands/${params.brand}`).then((resultado) => {
      console.log(resultado.data );


     setBrandDetails(resultado.data)  



   
    });
  }, []);

   
  return (
    <div>
     
     { brandDetails.length ===0 ?  <div className="Details">  <h4>No se puede mostrar información del Fabricante</h4> <img src="https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png"></img>                 <button ><Link to={`/products`}>Regresar</Link></button>
 </div>:


     
            <div className="Details">
              <div class="box-img-details">
            <img src={brandDetails.Img}></img>  
              </div>
              <div class="box-details">
                <div class="box-titleProd-details"> 

                 {brandDetails.Name} 
              
                  <div />
                </div>
                <div class="box-division-details">
                 
                </div>
                <div class="box-description-details">{brandDetails.Adress}</div>
                <button ><Link to={`/products`}>Regresar</Link></button>
              </div>
            </div>
         
          }  



     
    </div>
  )
}

export default DetailsBrand
