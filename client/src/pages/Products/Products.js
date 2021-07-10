import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css"

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("/api/nacho").then((resultado) => {
 
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

  console.log(products);

  return (
    <div className="Products">
      LISTADO DE PRODUCTOS:
      <div>
        <button onClick={priceAsc}>PRECIO ASCENDENTE</button>
        <button onClick={priceDesc}>PRECIO DESCENDENTE</button>
      </div>
      <ul>
        {products.map((item, i) => (
          <li key={i}>
            <img src={item.Img}></img>
            {item.Name} Precio: {item.Price} Relevancia {item.Relevance} Marca:{" "}
            {item.Brand}
            Descripción:   {item.Description}
          </li>
        ))}
    
      </ul>
    </div>
  );
};

export default Products;
