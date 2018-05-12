import React from 'react'
import CarouselIndex from './CarouselIndex'
import CategoriePanel from './CategoriePanel'
import IndexJumbotron from './IndexJumbotron'

export default class IndexHome extends React.Component {
  render () {
    return (
      <div>
        <CarouselIndex />
        <IndexJumbotron />
        <CategoriePanel title='Personnage' imageSrc='character.jpg' left />
        <CategoriePanel title='Species' imageSrc='specie.jpg' right />
        <CategoriePanel title='Starship' imageSrc='starship.jpg' left />
        <CategoriePanel title='Vehicle' imageSrc='vehicle.jpg' right />
      </div>
    )
  }
}
