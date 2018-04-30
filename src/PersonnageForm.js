import React from 'react'

export default class PersonnageForm extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    alert(this.input.value)
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
