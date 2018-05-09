import React from 'react'
import { Button, Grid, Row, Col, FormGroup, ControlLabel } from 'react-bootstrap'
const URL = 'https://swapi.co/api/'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      results: [],
      value: ''
    }
  }

  handleChange (event) {
    event.preventDefault()
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log(URL + this.props.category + '/?search=' + this.state.value)
    fetch(URL + this.props.category + '/?search=' + this.state.value)
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
      <Grid fluid>
        <Row className='PersonnageForm'>
          <Col xs={12} >
            <form onSubmit={this.handleSubmit}>
              <FormGroup bsSize='sm'>
                <ControlLabel>
                  Name :
                </ControlLabel>
                <input type='text' value={this.state.value} onChange={this.handleChange} />
                <Button type='submit'>Submit</Button>
              </FormGroup>
            </form>
          </Col>
        </Row>
      </Grid>
    )
  }
}
