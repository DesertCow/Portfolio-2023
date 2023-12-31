
//* React Import
import { useNavigate } from "react-router-dom";

//* Bootstrap Import
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//* Component CSS Import
import "./Header.css";


//+++++++++++++++++++ Component Export +++++++++++++++++++
const Header = () => {

  const navigate = useNavigate();

  const handleLogoClick = async (event) => {
    event.preventDefault();

    navigate("/home");
  };

  return (

    <header className="Header d-flex">
      <img src={require("../../img/Chip_Icon_2023.png")} onClick={(event) => handleLogoClick(event)} className="Logo" alt="Computer Chip Logo" />
      <Navbar className="d-flex">
        <Container fluid className="">

          <Nav.Link className="navBarText text-center" href="/Home">Home</Nav.Link>
          <Nav.Link className="navBarText text-center" href="/DevPortfolio">Dev Portfolio</Nav.Link>
          <Navbar.Toggle/>

          <Navbar.Collapse className="navBarText">
          <Nav.Link className="navBarText" href="/About">About Me</Nav.Link>
            <Nav>
              <NavDropdown
                title="Media"
                menuVariant="dark"
                className="DropMenu navBarText"
                >
                  <NavDropdown.Item className="DropMenu" href="/Media/Photo">Photo Gallery</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="DropMenu" href="/Media/Video">Video Gallery</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="DropMenu" href="/Media/Blog">Blog</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown
                title="Ice Climbing Maps"
                menuVariant="dark"
                className="DropMenu navBarText"
                >
                  <NavDropdown.Item className="DropMenu" href="/IceMaps/Hylaite">Hyalite Canyon, MT</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="DropMenu" href="/IceMaps/Cody">Cody, WY</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          <Nav.Link className="navBarText" href="/Contact">Contact</Nav.Link>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </header>

  );
}


export default Header;


//!========================= EOF =========================