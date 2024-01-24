//componentes
import CartWidget from "../cartWidget/cartWidget";
//Boostrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBarComponents.css"
import { Link } from "react-router-dom";
import { useCategory } from "../../hooks/useCategory";



function NavBarComponents() {

  const {category} = useCategory();
  console.log(category[0]?.categories, 'categoryNavBar')

  return (
    <Navbar expand="lg" className="bgNav">
      <Container className="flex jujstify-content-center">
        <Link to= "/"><img src="../icon/logo-webp.webp" style={{width : "8rem" , height : "8rem", borderRadius : "80px"}} alt="" />
        </Link>
        <Navbar.Toggle style={{backgroundColor: "black"}} aria-controls="basic-navbar-nav" className="mx-5 my-3 text-bgDrop" />
        <Navbar.Collapse id="basic-navbar-nav"className="flex mx-5">
          <Nav className="me-auto">
            <NavDropdown title="Products" id="basic-nav-dropdown">
      
               {category[0]?.categories?.map((category, index) => (
                 <NavDropdown.Item key={index}>
                   <Link to={`/category/${category}`} style={{ textDecoration: "none", color: "white" }}>
                     {category}
                   </Link>
                 </NavDropdown.Item>
               ))}
            </NavDropdown> 
          </Nav>
        </Navbar.Collapse>
          <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBarComponents;
