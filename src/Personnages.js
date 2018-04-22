import React, { Component } from 'react'
const URL_PEOPLE = 'https://swapi.co/api/people/'

export default class Personnage extends Component {
  constructor () {
    super()

    this.state = {
      isLoading: true,
      personnage: {}
    }
  }

  _fetchPersonnage () {
    fetch(URL_PEOPLE + '1')
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

  componentWillMount () {
    this._fetchPersonnage()
  }

  render () {
    return (
      <div>
        <h2> Personnage </h2>
      </div>
    )
  }
}
