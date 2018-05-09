import React from 'react'
import Form from './Form.js'
import PersonnageList from './Personnage/PersonnageList.js'

export default class CategoryIndex extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      results: [],
      component: {
        people : PersonnageList
      }
    }
  }

  updateResult = (data) => {
    this.setState({
      results: data
    })
  }

  componentWillMount () {
    console.log(this.props.data.category)
  }

  render () {
    let List = this.state.component[this.props.data.category] 
    return this.state.results.length === 0 ? 
      <Form parant={this.updateResult} category={this.props.data.category} /> 
      : <List perso={this.state.results}/>
  }
}
