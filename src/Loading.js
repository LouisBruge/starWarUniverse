import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

export default class Loading extends React.Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <p ClassName='text-center'> Wait... </p>
          </Col>
        </Row>
      </Grid>
    )
  }
}
