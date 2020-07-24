import React from 'react'
import {Navbar} from 'react-bootstrap'
import Link from 'next/link'
import styled from 'styled-components'


export const Navigation = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link><Nav.Link href="#home">Home</Nav.Link></Link>
        <Link><Nav.Link href="#link">Link</Nav.Link></Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
