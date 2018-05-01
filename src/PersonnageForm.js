import React from 'react'

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
        this.props.parant(this.state.results)
      })
  }

  render () {
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
