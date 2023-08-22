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
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          {/* <Navbar.Brand href='/'>MERN App</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link>
                  <FaHouseDamage /> Home
                </Nav.Link>
              </LinkContainer>

              {/* <LinkContainer>
                <Nav.Link>
                  <FaWrench /> Services
                </Nav.Link>
              </LinkContainer>

              <Nav.Link>
                <FaQuestion />
                Why Us
              </Nav.Link>

              <Nav.Link>
                <FaStar /> Reviews
              </Nav.Link>

              <Nav.Link>
                <FaPaperPlane /> About
              </Nav.Link>

              <Nav.Link>
                <FaShoppingBasket /> Shop
              </Nav.Link>

              <Nav.Link>
                <FaQuestionCircle /> FAQs
              </Nav.Link>

              <Nav.Link>
                <FaBook /> Contact
              </Nav.Link> */}

              <LinkContainer to="/login">
                <Nav.Link>
                  <FaSignInAlt /> Sign In
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/register">
                <Nav.Link>
                  <FaSignOutAlt /> Sign Up
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
