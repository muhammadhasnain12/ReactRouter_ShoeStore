import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
export const Header = () => {
  return (
    <div>


      <Navbar bg="light" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand><img src="https://pngimg.com/uploads/nike/nike_PNG11.png" alt="nike" style={{ width: '4rem', color: 'white' }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border: '2px solid black', color: 'black'}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* Nav.Link */}
            <Link to='/' className="btn btn-primary m-2 text-white">Home</Link>
            <Link to='/launch' className="btn btn-success m-2 text-white">Buy Items</Link>

          </Nav>

        </Navbar.Collapse>
      </Navbar>

    </div>
  )
}
