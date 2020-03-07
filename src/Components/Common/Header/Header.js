import React from 'react'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
export default function Header() {
    return (
        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="home">POWER-CHEF</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="home">HOME</Nav.Link>
      <Nav.Link href="aboutUs">ABOUT US</Nav.Link>
      <Nav.Link href="menu">MENU</Nav.Link>
      <Nav.Link href="blog">BLOG</Nav.Link>
      <Nav.Link href="gallery">GALLERY</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  </>
    )
}
