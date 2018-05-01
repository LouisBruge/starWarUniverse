import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default class NavBar extends React.Component {
  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to='/'>
              Star War Universe
            </NavLink>
          </Navbar.Brand>
        </Navbar.Header>

        <Nav>
          <NavItem>
            <NavLink to='/personnage'>
              Personnage
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/planet'>
              Planet
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/species'>
              Species
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/Starship'>
              Starship
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/vehicle'>
              Vehicle
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}
