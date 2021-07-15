import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import relevanceIcon from "../../img/relevanceIcon.png"
import addCartImg from "../../img/addCart.png";
import { debounce } from "debounce-react";
import "./Products.scss";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [search, setSearch] = useState("");
  const [listSearch, setListSearch] = useState([]);
  const [filtrados, setFiltrados] = useState([]);

  useEffect(() => {
    axios("/api/allProducts").then((resultado) => {
      console.log(resultado.data.Brand);
      setProducts(resultado.data);
    });
  }, []);

  useEffect(() => {
  
    
     

      filterSearch();

   

 



  }, [search]);

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
  const relevanceAsc = () => {
    const sorted = [...products].sort((a, b) => {
      return a.Relevance - b.Relevance;
    });
    setProducts(sorted);
  };
  const relevanceDesc = () => {
    const sorted = [...products].sort((a, b) => {
      return b.Relevance - a.Relevance;
    });
    setProducts(sorted);
  };
  const nameDesc = () => {
    const sorted = [...products].sort((a, b) => (a.Name > b.Name ? 1 : -1));
    setProducts(sorted);
  };
  const nameAsc = () => {
    const sorted = [...products].sort((a, b) => (a.Name < b.Name ? 1 : -1));
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

  const productSearch = (e) => {
 

    document.getElementById("resultsSearch").innerText = "";  

    e.preventDefault();
    let productToSearch = e.target.value;

   
    if (productToSearch.trim() == "") {
      document.getElementById("resultsSearch").innerText = "";
    } 
    else{ 

 debounce(() => setSearch(productToSearch), 1500);

                }
   
     
     
  };

  const paintSearch = () => {
    return filtrados.map((item) => (
      <p >
        <img src={item.Img}></img>{" "}
        <Link to={`/products/details/${item.IdProd}`}>{item.Name}</Link>
      </p>
    ));
  };

console.log(search)

  const filterSearch = () => {
    let arraysss = [];

    document.getElementById("resultsSearch").innerHTML = "";
    for (let producto of products) {
      let searchlCase = search.toLowerCase();

      let nombre = producto.Name.toLowerCase();
      let marca = producto.Brand.toLowerCase();

      if (nombre.indexOf(searchlCase) !== -1) {
        arraysss.push(producto);
        setFiltrados(arraysss);
      } else if (searchlCase === "danone" || searchlCase === "Danone") {
        let arreglo = products.filter((item) => item.Brand.includes(`Danone`));
        setFiltrados(arreglo);
      } else if (searchlCase === "bimbo" || searchlCase === "Bimbo") {
        let arreglo = products.filter((item) => item.Brand.includes(`Bimbo`));
        setFiltrados(arreglo);
      } else if (searchlCase === "kaiku" || searchlCase === "Kaiku") {
        let arreglo = products.filter((item) => item.Brand.includes(`Kaiku`));
        setFiltrados(arreglo);
      } else if (searchlCase === "kellogs" || searchlCase === "Kellogs") {
        let arreglo = products.filter((item) => item.Brand.includes(`Kellogs`));
        setFiltrados(arreglo);
      } else if (searchlCase === "dulcesol" || searchlCase === "Dulcesol") {
        let arreglo = products.filter((item) =>
          item.Brand.includes(`Dulcesol`)
        );
        setFiltrados(arreglo);
      }
    }
  };

  return (
    <div className="Products">
      <div className="search">
        <input
          type="text"
          name="searchProduct"
          id="search"
          onChange={productSearch}
          placeholder="Busca un producto"
        ></input>
        <div id="resultsSearch" className="resultsSearch">
          {search ? paintSearch() : ""}
        </div>
      </div>
      <div>
        <div className="filters">
          <button onClick={priceAsc}>€ ↑</button>
          <button onClick={priceDesc}>€ ↓</button>
          <button onClick={relevanceDesc}>👍🔎 ↓</button>
          <button onClick={relevanceAsc}>👍🔎 ↑</button>
          <button onClick={nameDesc}>A-Z ↓</button>
          <button onClick={nameAsc}>Z-A ↑</button>
        </div>
      </div>
      <br></br>
      <table>
        <div id="page1">
          <h5>Pagina 1</h5>
          <div className="botonera">
            <button onClick={nextPage1}>Siguiente</button>
          </div>
          {products.length === 0 ? (
            <p>
              <h1>NO HAY PRODUCTOS</h1>
            </p>
          ) : (
            products
              .map((item, i) => (
                <tr key={i}>
                  <td>
                    <img src={item.Img}></img>
                  </td>
                  <td>
                    <Link to={`/products/details/${item.IdProd}`}>
                      {item.Name}
                    </Link>
                  </td>{" "}
                  <td>{item.Price}€</td> <td><img src={relevanceIcon}></img>{item.Relevance}/5</td>
                  
                </tr>
              ))
              .slice(0, 10)
          )}
        </div>
        <div id="page2" className="hidden">
          <h5>Pagina 2</h5>
          <div className="botonera">
            <button onClick={backPage1}>Anterior</button>
            <button onClick={nextPage2}>Siguiente</button>
          </div>
          {products.length === 0 ? (
            <p>
              <h1>NO HAY PRODUCTOS</h1>
            </p>
          ) : (
            products
              .map((item, i) => (
                <tr key={i}>
                  <td>
                    <img src={item.Img}></img>
                  </td>
                  <td>
                    <Link to={`/products/details/${item.IdProd}`}>
                      {item.Name}
                    </Link>
                  </td>{" "}
                  <td>{item.Price}€</td> <td><img src={relevanceIcon}></img>{item.Relevance}/5</td>
                  
                </tr>
              ))
              .slice(10, 20)
          )}
        </div>
        <div id="page3" className="hidden">
          <h5>Pagina 3</h5>
          <div className="botonera">
            <button onClick={backPage2}>Anterior</button>
          </div>
          {products.length === 0 ? (
            <p>
              <h1>NO HAY PRODUCTOS</h1>
            </p>
          ) : (
            products
              .map((item, i) => (
                <tr key={i}>
                  <td>
                    <img src={item.Img}></img>
                  </td>
                  <td>
                    <Link to={`/products/details/${item.IdProd}`}>
                      {item.Name}
                    </Link>
                  </td>{" "}
                  <td>{item.Price}€</td> <td><img src={relevanceIcon}></img>{item.Relevance}/5</td>
                  
                </tr>
              ))
              .slice(20, 30)
          )}
        </div>
      </table>
    </div>
  );
};

export default Products;
