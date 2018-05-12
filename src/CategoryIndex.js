import React from 'react'
import Form from './Form.js'
import List from './List.js'

export default class CategoryIndex extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      results: [],
      }
    }

  updateResult = (data) => {
    this.setState({
      results: data
    })
  }

  componentWillMount() {
    console.log(this.props.category)
  }

  render () {
    return this.state.results.length === 0 ? 
      <Form parant={this.updateResult} category={this.props.category} /> 
      :<div> <Form parant={this.updateResult} category={this.props.category} /> <List result={this.state.results} category={this.props.category}/> </div>
  }
}
