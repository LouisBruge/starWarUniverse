import React from 'react'
import _urlToId from './_urlToId.js'
import Personnage from './Personnage/Personnage.js'
import Planet from './Planet/Planet.js'
import Species from './Species/Species.js'
import Starship from './Starship/Starship.js'
import Vehicle from './Vehicle/Vehicle.js'

export default class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      component: {
        people: Personnage,
        planets: Planet,
        species: Species,
        starships: Starship,
        vehicles: Vehicle
      }
    }
  }
  render () {
    if (this.props.result !== undefined) {
      const Category = this.state.component[this.props.category]
      const list = this.props.result.map(query => <Category name={_urlToId(query.url)} key={_urlToId(query.url)} />)
      return (
        <section id='PersonnageList'>
          {list}
        </section>
      )
    } else {
      return null
    }
  }
}
