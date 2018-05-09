import React from 'react'
import Loading from './Loading'
import { Grid, Col, Row } from 'react-bootstrap'
const URL_STARSHIP = 'https://swapi.co/api/starships/'

export default class Starship extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true,
      starship: {}
    }
  }

  _fetchStarship (id) {
    fetch(URL_STARSHIP + id)
      .then(function (response) {
        return response.json()
      })
      .then((myJSON) => {
        this.setState({
          starship: myJSON,
          isLoading: false
        })
        console.log(this.state.startship)
      })
  }

  componentWillMount () {
    this._fetchStarship(this.props.match.params.id)
  }

  render () {
    if (this.state.isLoading) {
      return (
        <Loading />
      )
    } else {
      return (
        <Grid>
          <Row className='starship-grid'>
            <Col xs={12} className='text-center'>
              <h2> {this.state.starship.name} </h2>
            </Col>
            <Col xs={12} className='text-justify'>
              <h3> Construct </h3>
            </Col>
            <Col xs={12} className='text-justify'>
              <p> Class : {this.state.starship.starship_class} </p>
              <p> Model : {this.state.starship.model} </p>
              <p> Manufacturer : {this.state.starship.manufacturer} </p>
              <p> Cost : {this.state.starship.cost_in_credits} credits</p>
            </Col>

            <Col xs={12} className='text-justify'>
              <h3> Specification </h3>
            </Col>
            <Col xs={12} className='text-justify'>
              <p> Length : {this.state.starship.length} m</p>
              <p> Crew : {this.state.starship.crew} </p>
              <p> Passengers : {this.state.starship.passengers} </p>
              <p> Capacity : {this.state.starship.cargo_capacity} kg</p>
            </Col>

            <Col xs={12} className='text-justify'>
              <h3> Speed </h3>
            </Col>
            <Col xs={12} className='text-justify'>
              <p> Speed in the atmosphere : {this.state.starship.max_atmosphering_speed} miles/hour</p>
              <p> Hyperdrive : {this.state.starship.hyperdrive_rating}</p>
              <p> MGLT : {this.state.starship.MGLT} AU</p>
            </Col>
          </Row>
        </Grid>)
    }
  }
}
