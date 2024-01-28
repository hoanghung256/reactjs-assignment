import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav} from 'react-bootstrap';
import logo from '../logo.svg'

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-secondary">
      <Container>
        <img src={logo} alt="" width="50px" />
        <Navbar.Brand href="/">Staff Management Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className='nav-link'>Staffs</NavLink>
            <NavLink to="/departments" className='nav-link'>Departments</NavLink>
            <NavLink to="/salary" className='nav-link'>Salary Report</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;