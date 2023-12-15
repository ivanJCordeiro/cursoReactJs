import { BrowserRouter, Routes , Route } from "react-router-dom";
import NavBarComponents from "../components/NavBarComponents/NavBarComponents";
import { Home } from "../pages/Home";
import { ItemDetailContainer } from "../pages/ItemDetailContainer";
import { Category } from "../pages/Category";

export const MainRouter = () => {
  return (
    <BrowserRouter>
        <NavBarComponents />
        <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/item/:id" element = {<ItemDetailContainer />} />
            <Route path="/category/:id" element = {<Category />} />
        </Routes>
    </BrowserRouter>
  )
}
