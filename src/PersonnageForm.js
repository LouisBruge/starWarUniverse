import React from 'react'
import Personnage from './Personnage.js'

export default class PersonnageForm extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      results: []
    }
  }

  handleSubmit (event) {
    event.preventDefault()
    fetch('https://swapi.co/api/people/?search=' + this.input.value)
      .then(function (response) {
        return response.json()
      })
      .then((myJson) => {
        this.setState({
          results: myJson.results
        })
      })
  }

  render () {
    if (this.state.results.length > 0) {
      for (let i = 0; i < this.state.results.length; i++) {
        console.log(this.state.results)
        let reg = new RegExp(/(\d+)/)

        let id = reg.exec(this.state.results[i].url)
        console.log(id)

        return (
          <div>
            <Personnage name={id[0]} />
          </div>
        )
      }
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
          Name :
          </label>
          <input type='text' ref={(input) => this.input = input} />
          <input type='submit' value='Submit' />
        </form>
      )
    }
  }
}
