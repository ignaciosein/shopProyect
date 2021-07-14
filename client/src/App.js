 
 
import { BrowserRouter } from "react-router-dom";  
import "./App.scss"
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import Footer from "../src/components/Footer";

function App() {
  return (
    <div >
   
   <BrowserRouter>  
<Header/>
<Main/>

</BrowserRouter> 
<Footer/>


    </div>
  );
}

export default App;
 