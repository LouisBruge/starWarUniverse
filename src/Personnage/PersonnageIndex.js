import React from 'react'
import Form from '../Form.js'
import PersonnageList from './PersonnageList.js'

export default class PersonnageIndex extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      results: []
    }
  }

  updateResult = (data) => {
    this.setState({
      results: data
    })
  }

  render () {
    return this.state.results.length === 0 ? 
      <Form parant={this.updateResult} category='people' /> 
      : <PersonnageList perso={this.state.results}/>
  }
}
