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

    document.getElementById("page1").style.display="none"
    document.getElementById("page2").style.display="block"

  };
  const nextPage2 = () => {

    document.getElementById("page2").style.display="none"
    document.getElementById("page3").style.display="block"

  };
  const backPage1 = () =>{

    document.getElementById("page2").style.display="none"
    document.getElementById("page1").style.display="block"
  }
  const backPage2 = () =>{

    document.getElementById("page2").style.display="block"
    document.getElementById("page3").style.display="none"
  }


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
<table>
    
{products
            .map((item, i) => (

              <tr key={i}>
                <td><img src={item.Img}></img></td>
                <td>{item.Name}</td>
                <td>{item.Price}</td> 
                <td>{item.Relevance} </td>  
                 <td>{item.Brand}</td>
                 <td>{item.Description}</td>
           
              </tr>
            ))
            .slice(0, 10)}








</table>
    <div className="box-prod">







    </div>


      <ul>
        <div id="page1">
          <h1>PAGINA 1</h1>

         

          <button onClick={nextPage1}>Siguiente</button>
        </div>
        <div id="page2" className="hidden">
          <h1>PAGINA 2</h1>
          {products
            .map((item, i) => (
              <li key={i}>
                <img src={item.Img}></img>
                {item.Name} <h1>Precio: {item.Price} </h1>Relevancia{" "}
                {item.Relevance} Marca: {item.Brand}
                Descripción: {item.Description}
              </li>
            ))
            .slice(10, 20)}
          {/*    {page2()} */}
          <button onClick={backPage1}>Anterior</button>
          <button onClick={nextPage2}>Siguiente</button>
          
        {/*   <button onClick={nextPage}>Anterior</button> */}
        </div>
        <div id="page3" className="hidden">
          <h1>PAGINA 3</h1>
          {products
            .map((item, i) => (
              <li key={i}>
                <img src={item.Img}></img>
                {item.Name} <h1>Precio: {item.Price}</h1> Relevancia{" "}
                {item.Relevance} Marca: {item.Brand}
                Descripción: {item.Description}
              </li>
            ))
            .slice(20, 30)}
             <button onClick={backPage2}>Anterior</button>
        </div>
      </ul>
    </div>
  );
};

export default Products;
