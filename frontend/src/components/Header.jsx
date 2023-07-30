import { Navbar, Nav, Container } from "react-bootstrap";
import {
  FaBook,
  FaHouseDamage,
  FaPaperPlane,
  FaQuestion,
  FaQuestionCircle,
  FaShoppingBasket,
  FaSignInAlt,
  FaSignOutAlt,
  FaStar,
  FaWrench,
} from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          {/* <Navbar.Brand href='/'>MERN App</Navbar.Brand> */}

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/login">
                <FaHouseDamage /> Home
              </Nav.Link>

              <Nav.Link href="/login">
                <FaWrench /> Services
              </Nav.Link>

              <Nav.Link href="/login">
                <FaQuestion />
                Why Us
              </Nav.Link>

              <Nav.Link href="/login">
                <FaStar /> Reviews
              </Nav.Link>

              <Nav.Link href="/login">
                <FaPaperPlane /> About
              </Nav.Link>

              <Nav.Link href="/login">
                <FaShoppingBasket /> Shop
              </Nav.Link>

              <Nav.Link href="/login">
                <FaQuestionCircle /> FAQs
              </Nav.Link>

              <Nav.Link href="/login">
                <FaBook /> Contact
              </Nav.Link>

              <Nav.Link href="/login">
                <FaSignInAlt /> Sign In
              </Nav.Link>

              <Nav.Link href="/login">
                <FaSignOutAlt /> Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
