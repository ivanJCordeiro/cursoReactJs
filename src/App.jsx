//Componentes
import { useEffect, useState } from "react";
import NavBarComponents from "./components/NavBarComponents/NavBarComponents";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import FooterComponent from "./components/FooterComponent/FooterComponent";
//Estilos
import "./App.css";
//Estilos boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { getProducts } from "./services";


function App() {
  const [productsData , setProductsData] = useState([]);
  useEffect(() => {
    getProducts().then((response) => {
      setProductsData(response.data.products)
    }) .catch ((error) => {
      console.log(error);
    })
  } , [])

  return (
    <div className="bgBody">
      <NavBarComponents />
      <ItemListContainer productsData = {productsData}/>
      <FooterComponent />
    </div>
  );
}

export default App;
