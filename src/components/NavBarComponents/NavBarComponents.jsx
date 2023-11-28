import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBarComponents = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">[Nombre de tienda]</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Producto 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Producto 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Producto 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Producto 3
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <img src="../icon/trolley.png" alt="" style={{width : "25px" , height : "25px"}}/>0
      </Container>
    </Navbar>
  );
};

export default NavBarComponents;
