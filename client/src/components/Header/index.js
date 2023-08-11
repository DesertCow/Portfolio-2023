
//* React Import
import { useNavigate } from "react-router-dom";

//* Bootstrap Import
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//* CSS Import
import "./Header.css";



const Header = () => {

  const navigate = useNavigate();

  const handleLogoClick = async (event) => {
    event.preventDefault();

    console.log("Logo Clicked");
    navigate("/home");
  };

  return (

    <header className="Header d-flex justify-content-between ">
      <img src={require("../../img/Empty.png")} onClick={(event) => handleLogoClick(event)} className="Logo my-2 mx-2" alt="logo" />
      <Navbar className="d-flex">
        <Container fluid className="mx-5">

          <Nav.Link className="navBarText mx-5 text-center" href="/Home">Home</Nav.Link>
          <Nav.Link className="navBarText mx-5 text-center" href="/DevPortfolio">Dev Portfolio</Nav.Link>
          <Navbar.Toggle/>

          <Navbar.Collapse className="navBarText mx-5">
            <Nav>
              <NavDropdown
                title="Media"
                menuVariant="dark"
                className="DropMenu navBarText mx-5"
                >
                  <NavDropdown.Item className="DropMenu p-3" href="/Media/Photo">Photo Gallery</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="DropMenu p-3" href="/Media/Video">Video Gallery</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="DropMenu p-3" href="/Media/Blog">Blog</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          <Nav.Link className="navBarText mx-5" href="/About">About Me</Nav.Link>
          <Nav.Link className="navBarText mx-5" href="/Contact">Contact</Nav.Link>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </header>

  );
}


export default Header;


//!========================= EOF =========================