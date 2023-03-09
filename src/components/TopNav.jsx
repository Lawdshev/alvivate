import {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate,Link } from "react-router-dom";
import { useUserAuth } from '../utilities/UserAuthContextProvider';

function TopNav() {
  const [expanded, setExpanded] = useState(false);
  const { cart, isAdmin } = useUserAuth();
  const navigate = useNavigate()

  return (
    <Navbar expand='lg' expanded={expanded} style={{ background: "#005B61" }}>
      <Container fluid>
        <div
          className='text-white'
          onClick={() => {
            navigate("/cart");
          }}>
          <i className='fa-solid fa-cart-shopping cursor-pointer'></i>
          {cart.length}
        </div>
        <Navbar.Toggle
          aria-controls='navbarScroll'
          style={{ backgroundColor: "white" }}
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse style={{ maxHeight: "100vh" }}>
          <Nav className='ms-auto h-96 lg:h-4 justify-around nav-collapse sm:w-screen  lg:w-2/5 flex no-underline item-center py-4'>
            <Link
              to='/Home'
              onClick={() => setExpanded(false)}
              style={{
                color: "white",
                alignSelf: "center",
                textDecoration: "none",
              }}>
              Home
            </Link>
            <Link
              to='/Men'
              onClick={() => setExpanded(false)}
              style={{
                color: "white",
                alignSelf: "center",
                textDecoration: "none",
              }}>
              Men
            </Link>
            <Link
              to='/Women'
              onClick={() => setExpanded(false)}
              style={{
                color: "white",
                alignSelf: "center",
                textDecoration: "none",
              }}>
              Women
            </Link>
            {isAdmin ? (
              <Link
                to='/Admin'
                onClick={() => setExpanded(false)}
                style={{
                  color: "white",
                  alignSelf: "center",
                  textDecoration: "none",
                }}>
                Admin
              </Link>
            ) : (
              <Link
                to='/Dashboard'
                onClick={() => setExpanded(false)}
                style={{
                  color: "white",
                  alignSelf: "center",
                  textDecoration: "none",
                }}>
                Payments
              </Link>
            )}
            <Link
              to='/Signout'
              onClick={() => setExpanded(false)}
              style={{
                color: "white",
                alignSelf: "center",
                textDecoration: "none",
              }}>
              Logout
            </Link>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;