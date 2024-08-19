import React from 'react'
import './header.css'
import {Container,Navbar,Nav} from 'react-bootstrap'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar expand="lg" className="menu">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto menu_ul">
            <Link>Home</Link>
            <Link>About us</Link>
            <Link>Features</Link>
            <Link>Pricing</Link>
            <Link>FAQ</Link>
            <Link>Blog</Link>
            
            <Link href="#link" className='menu_contact'>Contact us</Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header