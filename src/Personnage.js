import React, { Component } from 'react'

const URL_PEOPLE = 'https://swapi.co/api/people/'

export default class Personnage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true,
      personnage: {}
    }
  }

  _fetchPersonnage (id = '1') {
    fetch(URL_PEOPLE + id)
      .then((response) => {
        return response.json()
      })
      .then((myJson) => {
        // set the state isLoading to false
        this.setState({
          isLoading: false
        })

        // get the object myJson to the state personnage
        this.setState({
          personnage: myJson
        })
      })
  }

  componentWillMount () { this._fetchPersonnage(this.props.match.params.id) }
  render () {
    if (this.state.isLoading) {
      return (
        <div>
          <p> Loading...</p>
        </div>
      )
    } else {
      return (
        <div>
          <h2> {this.state.personnage.name} </h2>
          <p> born in : {this.state.personnage.birth_year} </p>
          <p> Sex : {this.state.personnage.gender} </p>
          <p> Specie : {this.state.personnage.species}</p>
          <p> Height : {this.state.personnage.height} cm </p>
          <p> Weight : {this.state.personnage.mass} kg </p>
        </div>
      )
    }
  }
}
