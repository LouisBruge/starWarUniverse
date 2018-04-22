import { Component } from 'react'
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
        console.log(myJson)
      })
  }

  componentWillMount () {
    this._fetchPersonnage()
  }
}
