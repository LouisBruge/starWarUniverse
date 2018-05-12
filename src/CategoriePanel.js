import React from 'react'
import { Grid, Row, Col, Button, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class CategoriePanel extends React.Component {
  convertUrl () {
    return `/${this.props.title.toLowerCase()}`
  }
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={4}>
            <Image src={this.props.imageSrc} responsive className='center-block' />
          </Col>
          <Col xs={8}>
            <h1 className='text-center'>
              {this.props.title}
            </h1>
            <p className='text-justify'>
              {this.props.descriptif}
            </p>
            <LinkContainer to={this.convertUrl()} >
              <Button className='center-block'>People</Button>
            </LinkContainer>
          </Col>
        </Row>
      </Grid>
    )
  }
}
