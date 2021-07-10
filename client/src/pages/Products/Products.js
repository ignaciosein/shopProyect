import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("/api/nacho").then((resultado) => {
      setProducts(resultado.data);
    });
  }, []);

  console.log(products);

  return (
    <div>
      LISTADO DE PRODUCTOS:
      <ul>
        {products.map((item, i) => (
          <li key={i}>{item.Name}</li>
        ))}

        {products.map((item, i) => (
          <li key={i}>{item.Price}</li>
        ))}
        {products.map((item, i) => (
          <li key={i}>{item.Relevance}</li>
        ))}
        {/*      <li>Nombre {products.Name}</li>

        <li>Precio {products.Price}</li>
        <li>Relevancia {products.Relevance}</li>  */}
      </ul>
    </div>
  );
};

export default Products;
