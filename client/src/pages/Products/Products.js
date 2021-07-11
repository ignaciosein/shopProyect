import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("/api/nacho").then((resultado) => {
      console.log(resultado.data.Brand);

      let arrayVacio = [];
      /*  for (let index = 0; index < resultado.data.length; index += 10) {
        arrayVacio.push(resultado.data.slice(index, index + 10));
      }
 */
      /*  console.log(arrayVacio)
      console.log(arrayVacio[1])
      console.log(arrayVacio[2]) */

      setProducts(resultado.data);
    });
  }, []);

  const priceAsc = () => {
    const sorted = [...products].sort((a, b) => {
      return a.Price - b.Price;
    });

    setProducts(sorted);
  };

  const priceDesc = () => {
    const sorted = [...products].sort((a, b) => {
      return b.Price - a.Price;
    });

    setProducts(sorted);
  };
  const nextPage1 = () => {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
  };
  const nextPage2 = () => {
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";
  };
  const backPage1 = () => {
    document.getElementById("page2").style.display = "none";
    document.getElementById("page1").style.display = "block";
  };
  const backPage2 = () => {
    document.getElementById("page2").style.display = "block";
    document.getElementById("page3").style.display = "none";
  };

  console.log(products);
  /*   console.log(products[1]);
  console.log(products[2]); */

  return (
    <div className="Products">
      LISTADO DE PRODUCTOS:
      <div>
        <button onClick={priceAsc}>PRECIO ASCENDENTE</button>
        <button onClick={priceDesc}>PRECIO DESCENDENTE</button>
      </div>
      <br></br>
      
    <div id="page1">
    <button onClick={nextPage1}>Siguiente</button>

      {products
            .map((item, i) => (
 
              <div className="box-prod" >
                
              <div class="box-img"><img src={item.Img}></img></div>
      
              <div class="box-details">
                <div class="box-titleProd">
                
                {item.Name}
                  <div />
                </div>
      
                <div class="box-division">
                  <div class="box-price">{item.Price}€</div>
                 
                </div>
                <div class="box-description">{item.Description}</div>
                
              </div>
            </div>
            
            
            
            
            ))
            .slice(0, 10)}
  

  </div>


  <div id="page2" className="hidden">
  <button onClick={backPage1}>Anterior</button>
    <button onClick={nextPage2}>Siguiente</button>

      {products
            .map((item, i) => (
 
              <div className="box-prod" >
                
              <div class="box-img"><img src={item.Img}></img></div>
      
              <div class="box-details">
                <div class="box-titleProd">
                
                {item.Name}
                  <div />
                </div>
      
                <div class="box-division">
                  <div class="box-price">{item.Price}€</div>
                 
                </div>
                <div class="box-description">{item.Description}</div>
                
              </div>
            </div>
            
            
            
            
            ))
            .slice(10, 20)}
  

  </div>
  <div id="page3" className="hidden">
    <button onClick={backPage2}>anterior</button>

      {products
            .map((item, i) => (
 
              <div className="box-prod" >
                
              <div class="box-img"><img src={item.Img}></img></div>
      
              <div class="box-details">
                <div class="box-titleProd">
                
                {item.Name}
                  <div />
                </div>
      
                <div class="box-division">
                  <div class="box-price">{item.Price}€</div>
                 
                </div>
                <div class="box-description">{item.Description}</div>
                
              </div>
            </div>
            
            
            
            
            ))
            .slice(20, 30)}
  

  </div>

 
    </div>
  );
};

export default Products;
