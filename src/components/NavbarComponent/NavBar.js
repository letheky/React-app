import { useState, useEffect } from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import './NavBar.css'
import logo from '../../assets/img/logo.png'
import {NavLink} from 'react-router-dom'


export default function NavBar(){

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (

    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand >
            <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </Nav>    
            </Navbar.Collapse>
        </Container>
    </Navbar>

  )
}
