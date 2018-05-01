import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
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
          <LinkContainer to='/personnage'>
            <NavItem>Personnage</NavItem>
          </LinkContainer>
          <LinkContainer to='/planet'>
            <NavItem>Planet</NavItem>
          </LinkContainer>
          <LinkContainer to='/species'>
            <NavItem>Species</NavItem>
          </LinkContainer>
          <LinkContainer to='/starship'>
            <NavItem>Starship</NavItem>
          </LinkContainer>
          <LinkContainer to='/vehicle'>
            <NavItem>Vehicle</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    )
  }
}
