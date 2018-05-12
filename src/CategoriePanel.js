import React from 'react'
import { Grid, Row, Media, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class CategoriePanel extends React.Component {
  convertUrl () {
    return `/${this.props.title.toLowerCase()}`
  }

  imagePath () {
    return `/Images/${this.props.imageSrc}`
  }

  render () {
    let image = <img src={this.imagePath()} />
    let imageLeft = this.props.left === true ? <Media.Left> {image} </Media.Left> : null
    let imageRight = this.props.right === true ? <Media.Right> {image} </Media.Right> : null

    return (
      <Grid fluid>
        <Media>
          {imageLeft}
          <Media.Body >
            <Media.Heading align='middle' className='text-center'>
              {this.props.title}
            </Media.Heading>
            <p className='text-justify'>
              {this.props.descriptif}
            </p>
            <LinkContainer to={this.convertUrl()} >
              <Button className='center-block'>Explore {this.props.title} base</Button>
            </LinkContainer>
          </Media.Body>
          {imageRight}
        </Media>
      </Grid>
    )
  }
}
