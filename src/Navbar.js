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
          <NavItem href='/personnage'>
        Personnage
          </NavItem>
          <NavItem href='/vehicle'>
        Vehicle
          </NavItem>
          <NavItem href='/planet'>
        Planet
          </NavItem>
          <NavItem href='/starship'>
      Starship
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}
