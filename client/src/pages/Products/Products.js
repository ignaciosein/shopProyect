import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("/api/nacho").then((resultado) => {
      /*    let arrayAsc = resultado.data.sort((a,b) => a.Price - b.Price)

      console.log(arrayAsc)
 */
      setProducts(resultado.data);
    });
  }, []);

  /*     console.log(products) */

  //PRECIO ASCENDENTE
  /*  console.log(products.sort((a,b) => a.Price - b.Price));   */
  //PRECIO DESCENDENTE
  /*  console.log(products.sort((a,b) => b.Price - a.Price));    */

  const priceAsc = () => {

    const sorted = [...products].sort((a, b) => {
      return a.Price - b.Price;
    });

    setProducts(sorted)

  /*   setProducts(products.sort((a, b) => b.Price - a.Price)); */



  };

  const priceDesc = () => {


    const sorted = [...products].sort((a, b) => {
      return b.Price - a.Price;
    });

    setProducts(sorted)


  };
  


  console.log(products);

  return (
    <div>
      LISTADO DE PRODUCTOS:
      <div>
        <button onClick={priceAsc}>PRECIO ASCENDENTE</button>
        <button onClick={priceDesc}>PRECIO ASCENDENTE</button>
      </div>
      <ul>
        {products.map((item, i) => (
          <li key={i}>
            {item.Name} Precio: {item.Price} Relevancia {item.Relevance}{" "}
          </li>
        ))}

        {/*      <li>Nombre {products.Name}</li>

        <li>Precio {products.Price}</li>
        <li>Relevancia {products.Relevance}</li>  */}
      </ul>
    </div>
  );
};

export default Products;
