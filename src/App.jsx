//Componentes
import FooterComponent from "./components/FooterComponent/FooterComponent";
//Estilos boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Estilos
import "./App.css";
//Router
import { MainRouter } from "./router/MainRouter";




function App() {
 
  return (
    <div className="bgBody">
      <MainRouter />
      <FooterComponent />
    </div>
  );
}

export default App;
