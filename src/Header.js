import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <section>
        <NavItem className='navLink'><Link to="/" className="nav-link"><p>Home</p></Link></NavItem>
        <NavItem className='navLink'><Link to="/About" className="nav-link"><p>About us</p></Link></NavItem>
        </section>
      </Navbar>
    )
  }
}

export default Header;
