//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TopNav() {

  return (
    <Navbar expand="lg" style={{background: "#120241"}}> 
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" style={{backgroundColor:"white"}} />
        <Navbar.Collapse style={{maxHeight: '100vh'}} >
          <Nav
            className="ms-auto nav-collapse">
            <Nav.Link href="/Home" style={{color:"white", alignSelf:'center'}}>Home</Nav.Link>
            <Nav.Link href="/Men" style={{color:"white", alignSelf:'center' }}>Men</Nav.Link>
            <Nav.Link href="/Women" style={{color:"white", alignSelf:'center' }}>Women</Nav.Link>
            <Nav.Link href="/Dashboard" style={{color:"white", alignSelf:'center' }} >Dashboard</Nav.Link>
            <Nav.Link href="/Signout" style={{color:"white", alignSelf:'center' }}>Logout</Nav.Link>   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;