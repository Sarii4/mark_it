import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircleStyled } from './NavbarStyled';

function Nav() {
  return (
      <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Mark It</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <FaUserCircleStyled/>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nav;
