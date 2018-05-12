import React from 'react'
import { Button, Grid, Row, Col, FormGroup, ControlLabel, FormControl, Form } from 'react-bootstrap'
const URL = 'https://swapi.co/api/'

export default class FormInput extends React.Component {
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
          <Col xs={10} xsOffset={1} >
            <Form onSubmit={this.handleSubmit} horizontal>
              <FormGroup>
                <ControlLabel>
                  Name
                </ControlLabel>
                <FormControl type='text' value={this.state.value} onChange={this.handleChange} placeholder='write you query here!' />
                <Button type='submit'>Submit</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Grid>
    )
  }
}
