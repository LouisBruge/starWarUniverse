import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Planet from './Planet/Planet.js'
import Starship from './Starship/Starship.js'
import Personnage from './Personnage/Personnage.js'
import PersonnageIndex from './Personnage/PersonnageIndex.js'
import Vehicle from './Vehicle/Vehicle.js'
import Species from './Species/Species.js'
import CarouselIndex from './CarouselIndex.js'
import {Route, BrowserRouter, Switch, NavLink} from 'react-router-dom'

export default class NavBar extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
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
                <NavItem>
              Personnage
                </NavItem>
              </LinkContainer>
              <LinkContainer to='/planet'>
                <NavItem>
              Planet
                </NavItem>
              </LinkContainer>
              <LinkContainer to='/species'>
                <NavItem>
              Species
                </NavItem>
              </LinkContainer>
              <LinkContainer to='/starship'>
                <NavItem>
              Starship
                </NavItem>
              </LinkContainer>
              <LinkContainer to='/vehicle'>
                <NavItem>
              Vehicle
                </NavItem>
              </LinkContainer>
            </Nav>
          </Navbar>

          <Switch>
            <Route exact path='/' component={CarouselIndex} />
            <Route exact path='/starship/:id(\d+)' component={Starship} />
            <Route exact path='/planet/:id(\d+)' component={Planet} />
            <Route exact path='/personnage/:id(\d+)' component={Personnage} />
            <Route exact path='/personnage' component={PersonnageIndex} />
            <Route exact path='/vehicle/:id(\d+)' component={Vehicle} />
            <Route exact path='/species/:id(\d+)' component={Species} />
          </Switch>
        </div>
      </BrowserRouter>

    )
  }
}
