import React from 'react'
import { Route } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class IndexJumbotron extends React.Component {
  render () {
    return (
      <Jumbotron>
        <Grid>
          <Row>
            <Col xs={12}>
              <h1 className='text-center'> Welcome inside the Star War Universe </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <p className='text-justify'>
          Here, we can explore the universe of the films Star War (Personnages, Planets, Species, Starships and Vehicles) through the SWAPI API
              </p>
            </Col>
          </Row>
        </Grid>
      </Jumbotron>
    )
  }
}
