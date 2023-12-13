//Componentes
import NavBarComponents from "./components/NavBarComponents/NavBarComponents";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import FooterComponent from "./components/FooterComponent/FooterComponent";
//Estilos boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Estilos
import "./App.css";
//Hooks
import { useGetProducts,} from "./components/hooks/useProducts";



function App() {
 
const { productsData } = useGetProducts (30);


  return (
    <div className="bgBody">
      <NavBarComponents />
      <ItemListContainer productsData = {productsData}/>
      <FooterComponent />
    </div>
  );
}

export default App;
