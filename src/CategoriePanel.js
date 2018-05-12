import React from 'react'
import { Grid, Row, Media, Button, Image } from 'react-bootstrap'
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
    let imageMedia = this.props.left === true ? <Media.Left> {image} </Media.Left> : <Media.Right> {image} </Media.Right>

    return (
      <Grid fluid>
        <Media>
          {imageMedia}
          <Media.Body >
            <Media.Heading className='text-center'>
              {this.props.title}
            </Media.Heading>
            <p className='text-justify'>
              {this.props.descriptif}
            </p>
            <LinkContainer to={this.convertUrl()} >
              <Button className='center-block'>Explore {this.props.title} base</Button>
            </LinkContainer>
          </Media.Body>
        </Media>
      </Grid>
    )
  }
}
