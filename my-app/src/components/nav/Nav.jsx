import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../nav/nav.css'

const AppNavBar = () => {
  return (
      <>
          <Navbar>
              <Container className='navContainer'>
                  <Nav>
                      <Nav.Link className="navBtns" href="/">Home</Nav.Link>
                      <Nav.Link className="navBtns" href="/login">Log in</Nav.Link>
                      <Nav.Link className="navBtns" href="/signup">Sign Up</Nav.Link>
                      <Form className="searchBar">
                          <Form.Control
                              type="search"
                              placeholder="Search"
                          />
                          <Button className="searchBtn" variant="outline-success">Search</Button>
                      </Form>
                  </Nav>
              </Container>
          </Navbar>
      </>
  )
}

export default AppNavBar;