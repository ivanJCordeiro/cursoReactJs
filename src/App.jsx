//Componentes
import NavBarComponents from "./components/NavBarComponents/NavBarComponents";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import cartWidget from "./components/cartWidget/cartWidget";
//Estilos
import "./App.css";
//Estilos boostrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div style={{width: "100vw" , height : "100vh"}}>
      <NavBarComponents />
      <ItemListContainer greeting = "Bienvenidos a la tienda!"/>
    </div>
  );
}

export default App;
