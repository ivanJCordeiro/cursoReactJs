//Componentes
import FooterComponent from "./components/FooterComponent/FooterComponent";
//Estilos boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Estilos
import "./App.css";
//Router
import { MainRouter } from "./router/MainRouter";
//Provider
import { CartProvider } from "./context/CartContext";




function App() {
 
  return (
    <div className="bgBody">
      <CartProvider>
        <MainRouter />
        <FooterComponent />
      </CartProvider>
    </div>
  );
}

export default App;
