import React from 'react'
import { Carousel, Image } from 'react-bootstrap'

export default class CarouselIndex extends React.Component {
  render () {
    return (
      <Carousel indicators={false}>
        <Carousel.Item>
          <Image alt='Carousel starWar' src='/Images/1.jpg' responsive />
        </Carousel.Item>
        <Carousel.Item>
          <Image responsive alt='Carousel starWar' src='/Images/2.jpg' />
        </Carousel.Item>
        <Carousel.Item>
          <Image responsive alt='Carousel starWar' src='/Images/3.jpg' />
        </Carousel.Item>
        <Carousel.Item>
          <Image responsive alt='Carousel starWar' src='/Images/4.jpg' />
        </Carousel.Item>
        <Carousel.Item>
          <Image alt='Carousel starWar' src='/Images/5.jpg' responsive />
        </Carousel.Item>
      </Carousel>
    )
  }
}
