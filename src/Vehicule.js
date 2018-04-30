import {Component} from 'react'

export default class Vehicule extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      vehicule: {}
    }
  }

  render () {
    return (
      <div>
        <h2> Vehicules </h2>
      </div>
    )
  }
}
