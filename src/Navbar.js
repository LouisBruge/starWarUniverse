import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default class NavBar extends React.Component {
  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='/'>Star War Universe</a>
          </Navbar.Brand>
        </Navbar.Header>

        <Nav>
          <NavItem href='/Personnages'>
        Personnages
          </NavItem>
          <NavItem href='Vehicules'>
        Vehicules
          </NavItem>
          <NavItem href='/Planets'>
        Planets
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}
