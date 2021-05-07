import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <Navbar bg="light" variant="light" expand="lg" style={{padding: '20px'}}>
        <Navbar.Brand style={{fontSize: "25px"}}>
            <NavLink to="/">TSF BANK</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link style={{fontSize: "21px"}}>
                    <NavLink to="customers">
                        Customers
                    </NavLink>
                </Nav.Link>
                <Nav.Link style={{fontSize: "21px"}}>
                    <NavLink to="transactions">
                        Transactions
                    </NavLink>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Navigation;