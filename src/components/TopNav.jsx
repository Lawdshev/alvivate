//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate,Link } from "react-router-dom";
import { useProductContext } from "../utilities/ProductsContext";

function TopNav() {
  const {cart} = useProductContext();
  const navigate = useNavigate()

  return (
    <Navbar expand="lg" style={{background: "#120241"}}> 
      <Container fluid>
        <div className="text-white" onClick={() => {
          navigate("/cart")}} >Cart:{cart.length}</div>
        <Navbar.Toggle aria-controls="navbarScroll" style={{backgroundColor:"white"}} />
        <Navbar.Collapse style={{maxHeight: '100vh'}} >
          <Nav
            className="ms-auto nav-collapse w-2/5 flex justify-around no-underline">
            <Link to="/Home" style={{color:"white", alignSelf:'center',textDecoration:'none'}}>Home</Link>
            <Link to="/Men" style={{color:"white", alignSelf:'center',textDecoration:'none' }}>Men</Link>
            <Link to="/Women" style={{color:"white", alignSelf:'center',textDecoration:'none' }}>Women</Link>
            <Link to="/Dashboard" style={{color:"white", alignSelf:'center',textDecoration:'none' }} >Dashboard</Link>
            <Link to="/Signout" style={{color:"white", alignSelf:'center',textDecoration:'none' }}>Logout</Link>         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;