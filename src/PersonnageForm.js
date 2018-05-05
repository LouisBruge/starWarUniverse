import React from 'react'
import { Button, Grid, Row, Col, FormGroup, ControlLabel } from 'react-bootstrap'

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
      <Grid fluid>
        <Row className='PersonnageForm'>
          <Col xs={12} >
            <form onSubmit={this.handleSubmit}>
              <FormGroup bsSize='sm'>
                <ControlLabel>
                  Name :
                </ControlLabel>
                <input type='text' ref={(input) => this.input = input} />
                <Button type='submit'>Submit</Button>
              </FormGroup>
            </form>
          </Col>
        </Row>
      </Grid>
    )
  }
}
