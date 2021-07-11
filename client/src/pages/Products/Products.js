import React, { useState, useEffect } from "react";
import axios from "axios";
import { debounce } from "debounce-react";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    axios("/api/nacho").then((resultado) => {
      console.log(resultado.data.Brand);

      setProducts(resultado.data);
    });
  }, []);

  useEffect(() => {
    document.getElementById("resultsSearch").innerHTML = "";
    for (let producto of products) {let searchlCase = search.toLowerCase();

      let nombre = producto.Name.toLowerCase();
      let marca = producto.Brand.toLowerCase();

      if (nombre.indexOf(searchlCase) !== -1) {
        document.getElementById("resultsSearch").innerHTML += `<p><img src='${producto.Img}' > ${producto.Name}</p>`;
      } else if (searchlCase === "danone" || searchlCase === "Danone") { let arreglo = products.filter((item) => item.Brand.includes(`Danone`));
        for (let index = 0; index < arreglo.length; index++) {document.getElementById("resultsSearch" ).innerHTML += `<p><img src='${arreglo[index].Img}' > ${arreglo[index].Name}</p>`;
        }   break;
      } else if (searchlCase === "bimbo" || searchlCase === "Bimbo") { let arreglo = products.filter((item) => item.Brand.includes(`Bimbo`));
      for (let index = 0; index < arreglo.length; index++) {document.getElementById("resultsSearch" ).innerHTML += `<p><img src='${arreglo[index].Img}' > ${arreglo[index].Name}</p>`;
      }   break;
    } else if (searchlCase === "kaiku" || searchlCase === "Kaiku") { let arreglo = products.filter((item) => item.Brand.includes(`Kaiku`));
    for (let index = 0; index < arreglo.length; index++) {document.getElementById("resultsSearch" ).innerHTML += `<p><img src='${arreglo[index].Img}' > ${arreglo[index].Name}</p>`;
    }   break;
  } else if (searchlCase === "kellogs" || searchlCase === "Kellogs") { let arreglo = products.filter((item) => item.Brand.includes(`Kellogs`));
  for (let index = 0; index < arreglo.length; index++) {document.getElementById("resultsSearch" ).innerHTML += `<p><img src='${arreglo[index].Img}' > ${arreglo[index].Name}</p>`;
  }   break;
} else if (searchlCase === "dulcesol" || searchlCase === "Dulcesol") { let arreglo = products.filter((item) => item.Brand.includes(`Dulcesol`));
for (let index = 0; index < arreglo.length; index++) {document.getElementById("resultsSearch" ).innerHTML += `<p><img src='${arreglo[index].Img}' > ${arreglo[index].Name}</p>`;
}   break;

  }
    }
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
    console.log(e.target.value);
    document.getElementById("resultsSearch").innerHTML = "";
    e.preventDefault();
    let productToSearch = e.target.value;
    if (productToSearch.trim() == "") {
      document.getElementById("resultsSearch").innerText = "";
    } else {
      debounce(() => setSearch(productToSearch), 1500);
    }
  };

  return (
    <div className="Products">
      LISTADO DE PRODUCTOS:
      <div className="search">
        <input
          type="text"
          name="pokemon"
          id="search"
          onChange={productSearch}
        ></input>

        <div id="resultsSearch" className="resultsSearch"></div>
      </div>
      <div>
        <button onClick={priceAsc}>PRECIO ASCENDENTE</button>
        <button onClick={priceDesc}>PRECIO DESCENDENTE</button>
      </div>
      <br></br>
      <div id="page1">
        <button onClick={nextPage1}>Siguiente</button>

        {products
          .map((item, i) => (
            <div className="box-prod">
              <div class="box-img">
                {/*         <img src={item.Img}></img> */}
              </div>
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
            <div className="box-prod">
              <div class="box-img">{/*     <img src={item.Img}></img> */}</div>
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
            <div className="box-prod">
              <div class="box-img">
                {/*       {     <img src={item.Img}></img> } */}
              </div>
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
