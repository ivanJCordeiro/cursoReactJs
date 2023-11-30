//Componentes
import NavBarComponents from "./components/NavBarComponents/NavBarComponents";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//Estilos
import "./App.css";
//Estilos boostrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div style={{width: "100vw" , height : "100vh"}}>
      <NavBarComponents />
      <ItemListContainer greeting = "Bienvenidos a CellShopping!"/>
    </div>
  );
}

export default App;
