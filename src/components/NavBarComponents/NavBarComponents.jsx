//componentes
import CartWidget from "../cartWidget/cartWidget";
//Boostrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBarComponents() {
  return (
    <Navbar expand="lg" style={{backgroundColor : ""}}>
      <Container>
        <img src="../icon/logo.svg" style={{width : "8rem" , height : "8rem", borderRadius : "80px"}} alt="" />
        <Navbar.Brand href="#home" style={{marginLeft : "25rem"}}>Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Iphone</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Samsung
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Motorola</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Xiaomi
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
