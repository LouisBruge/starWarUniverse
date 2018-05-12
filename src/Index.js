import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import CarouselIndex from './CarouselIndex'
import CategoriePanel from './CategoriePanel'
import IndexJumbotron from './IndexJumbotron'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <CarouselIndex />
        <IndexJumbotron />
        <CategoriePanel title='Personnage' imageSrc='character.jpg' />
        <CategoriePanel title='Planet' imageSrc='planet.jpg' />
        <CategoriePanel title='Species' imageSrc='specie.jpg' />
        <CategoriePanel title='Starship' imageSrc='starship.jpg' />
        <CategoriePanel title='Vehicle' imageSrc='vehicle.jpg' />
      </div>
    )
  }
}
