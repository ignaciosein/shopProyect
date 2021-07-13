import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import addCartImg from "../../img/addCart.png"
import { debounce } from "debounce-react";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [search, setSearch] = useState(null);

  useEffect(() => { axios("/api/allProducts").then((resultado) => {console.log(resultado.data.Brand);setProducts(resultado.data);});}, []);

  useEffect(() => {
    document.getElementById("resultsSearch").innerHTML = "";
    for (let producto of products) {
      let searchlCase = search.toLowerCase();

      let nombre = producto.Name.toLowerCase();
      let marca = producto.Brand.toLowerCase();

      if (nombre.indexOf(searchlCase) !== -1) {
        console.log(producto.IdProd);

        document.getElementById(
          "resultsSearch"
        ).innerHTML += `<p><img src='${producto.Img}' > <a href='products/details/${producto.IdProd}'>${producto.Name}</a></p>`;
      } else if (searchlCase === "danone" || searchlCase === "Danone") {
        let arreglo = products.filter((item) => item.Brand.includes(`Danone`));
        for (let index = 0; index < arreglo.length; index++) {
          document.getElementById(
            "resultsSearch"
          ).innerHTML += `<p><img src='${arreglo[index].Img}' ><a href='products/details/${arreglo[index].IdProd}'> ${arreglo[index].Name}</a></p>`;
        }
        break;
      } else if (searchlCase === "bimbo" || searchlCase === "Bimbo") {
        let arreglo = products.filter((item) => item.Brand.includes(`Bimbo`));
        for (let index = 0; index < arreglo.length; index++) {
          document.getElementById(
            "resultsSearch"
          ).innerHTML += `<p><img src='${arreglo[index].Img}' ><a href='products/details/${arreglo[index].IdProd}'> ${arreglo[index].Name}</a></p>`;
        }
        break;
      } else if (searchlCase === "kaiku" || searchlCase === "Kaiku") {
        let arreglo = products.filter((item) => item.Brand.includes(`Kaiku`));
        for (let index = 0; index < arreglo.length; index++) {
          document.getElementById(
            "resultsSearch"
          ).innerHTML += `<p><img src='${arreglo[index].Img}' ><a href='products/details/${arreglo[index].IdProd}'> ${arreglo[index].Name}</a></p>`;
        }
        break;
      } else if (searchlCase === "kellogs" || searchlCase === "Kellogs") {
        let arreglo = products.filter((item) => item.Brand.includes(`Kellogs`));
        for (let index = 0; index < arreglo.length; index++) {
          document.getElementById(
            "resultsSearch"
          ).innerHTML += `<p><img src='${arreglo[index].Img}' ><a href={'products/details/${arreglo[index].IdProd}'}> ${arreglo[index].Name}</a></p>`;
        }
        break;
      } else if (searchlCase === "dulcesol" || searchlCase === "Dulcesol") {
        let arreglo = products.filter((item) =>
          item.Brand.includes(`Dulcesol`)
        );
        for (let index = 0; index < arreglo.length; index++) {
          document.getElementById(
            "resultsSearch"
          ).innerHTML += `<p><img src='${arreglo[index].Img}' > <a href={'products/details/${arreglo[index].IdProd}'}> ${arreglo[index].Name} </a></p>`;
        }
        break;
      }
    }
  }, [search]);

  const addToCart = (id) => {
    let ArrayClean = [];

    let recoveredData = localStorage.getItem("cart");

    if (recoveredData === null) {
      let prodCart = [{ IdProd: id.target.value, }, ];localStorage.setItem("cart", JSON.stringify(prodCart));

      ArrayClean.push(prodCart);
    } else if (recoveredData !== null) {
      let data = JSON.parse(recoveredData);

      console.log(data);

      if (data.IdProd.includes(2)) {
        alert("Ya existe el 2");
        let prodCartNew = {
          IdProd: id.target.value,
        };
        data.push(prodCartNew);
        localStorage.setItem("cart", JSON.stringify(data));

        for (let index = 0; index < data.length; index++) {
          let meterArray = data[index];
          ArrayClean.push(meterArray);
        }
      } else {
      }
    } else {
      let datosLocalStorage = JSON.parse(localStorage.getItem("cart"));
      if (datosLocalStorage !== null) {
        for (let index = 0; index < datosLocalStorage.length; index++) {
          let dataLocalStorage = datosLocalStorage[index];
          ArrayClean.push(dataLocalStorage);
        }
      }
    }
  };

const priceAsc = () => { const sorted = [...products].sort((a, b) => {return a.Price - b.Price; }); setProducts(sorted);};
const priceDesc = () => { const sorted = [...products].sort((a, b) => { return b.Price - a.Price; }); setProducts(sorted);};
const relevanceAsc = () => { const sorted = [...products].sort((a, b) => {return a.Relevance - b.Relevance;});setProducts(sorted); };
const relevanceDesc = () => { const sorted = [...products].sort((a, b) => { return b.Relevance - a.Relevance; }); setProducts(sorted);  };
const nameDesc = () => { const sorted = [...products].sort( (a, b) => (a.Name > b.Name) ? 1 : -1); setProducts(sorted);    };
const nameAsc = () => { const sorted = [...products].sort( (a, b) => (a.Name < b.Name) ? 1 : -1); setProducts(sorted);   };



const nextPage1 = () => {    document.getElementById("page1").style.display = "none";    document.getElementById("page2").style.display = "block";  };
const nextPage2 = () => {    document.getElementById("page2").style.display = "none";    document.getElementById("page3").style.display = "block";  };
const backPage1 = () => {    document.getElementById("page2").style.display = "none";    document.getElementById("page1").style.display = "block";  };
const backPage2 = () => {    document.getElementById("page2").style.display = "block";    document.getElementById("page3").style.display = "none";  };

  const productSearch = (e) => {document.getElementById("resultsSearch").innerHTML = ""; e.preventDefault();let productToSearch = e.target.value; if (productToSearch.trim() == "") { document.getElementById("resultsSearch").innerText = ""; } else { debounce(() => setSearch(productToSearch), 1500);  }  };

 
  return (
    <div className="Products">
  
      <div className="search">
        <input type="text" name="pokemon" id="search"  onChange={productSearch}  placeholder="Busca un producto"  ></input>
        <div id="resultsSearch" className="resultsSearch"></div>
      </div>
      <div>
      <div className="filters">
        <button onClick={priceAsc}>€ ↑</button>
        <button onClick={priceDesc}>€ ↓</button>
        <button onClick={relevanceDesc}>👎🔎 ↓</button>
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
          {products.length===0? <p><h1>NO HAY PRODUCTOS</h1></p>:  products.map((item, i) => (<tr key={i}><td><img src={item.Img}></img></td><td><a href={`/products/details/${item.IdProd}`}>{item.Name}</a></td> <td>{item.Price}€</td> <td>👍🔎{item.Relevance}/5</td><td><img className="addCartImg" src={addCartImg}></img></td> </tr> )).slice(0, 10)  }
        </div>
        <div id="page2" className="hidden">
        <h5>Pagina 2</h5>
        <div className="botonera">
          <button onClick={backPage1}>Anterior</button>
          <button onClick={nextPage2}>Siguiente</button>
          </div>
          {products.length===0? <p><h1>NO HAY PRODUCTOS</h1></p>:  products.map((item, i) => (<tr key={i}><td><img src={item.Img}></img></td><td><a href={`/products/details/${item.IdProd}`}>{item.Name}</a></td> <td>{item.Price}€</td> <td>👍🔎{item.Relevance}/5</td><td><img className="addCartImg" src={addCartImg}></img></td> </tr> )).slice(10, 20)  }
             </div>
        <div id="page3" className="hidden">
        <h5>Pagina 3</h5>
        <div className="botonera">
          <button onClick={backPage2}>Anterior</button>
          </div>
          {products.length===0? <p><h1>NO HAY PRODUCTOS</h1></p>:  products.map((item, i) => (<tr key={i}><td><img src={item.Img}></img></td><td><a href={`/products/details/${item.IdProd}`}>{item.Name}</a></td> <td>{item.Price}€</td> <td>👍🔎{item.Relevance}/5</td><td><img className="addCartImg" src={addCartImg}></img></td> </tr> )).slice(20, 30)  }
         </div>
      </table>
    </div>
  );
};

export default Products;
