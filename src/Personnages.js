import { Component } from 'react'

export default class Personnage extends Component {
  constructor () {
    super()

    this.state = {
      isLoading: true,
      personnage: {}
    }
  }
}
