//componentes
import CartWidget from "../cartWidget/cartWidget";
//Boostrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBarComponents() {
  return (
    <Navbar expand="lg" className="bg-secondary">
      <Container className="flex">
        <img src="../icon/logo-webp.webp" style={{width : "8rem" , height : "8rem", borderRadius : "80px"}} alt="" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-5 text-bg-dark" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex mx-5 ">
          <Navbar.Brand href="#home">Inicio</Navbar.Brand> 
          <Nav className="me-auto">
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item className="bg-dark" href="#action/3.1">Celulares</NavDropdown.Item>
              <NavDropdown.Item className="bg-dark" href="#action/3.2">
                Notebooks
              </NavDropdown.Item>
              <NavDropdown.Item className="bg-dark" href="#action/3.3">Perfumes</NavDropdown.Item>
              <NavDropdown.Item className="bg-dark" href="#action/3.4">
                Otros
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Nosotros</Nav.Link>  
          </Nav>
        </Navbar.Collapse>
          <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBarComponents;
