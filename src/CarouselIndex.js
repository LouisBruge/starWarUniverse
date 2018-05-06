import React from 'react'
import { Carousel } from 'react-bootstrap'

export default class CarouselIndex extends React.Component {
  render () {
    return (
      <Carousel indicators={false}>
        <Carousel.Item>
          <img responsive alt='Carousel starWar' src='/Images/1.jpg' />
        </Carousel.Item>
        <Carousel.Item>
          <img responsive alt='Carousel starWar' src='/Images/2.jpg' />
        </Carousel.Item>
        <Carousel.Item>
          <img responsive alt='Carousel starWar' src='/Images/3.jpg' />
        </Carousel.Item>
        <Carousel.Item>
          <img responsive alt='Carousel starWar' src='/Images/4.jpg' />
        </Carousel.Item>
        <Carousel.Item>
          <img responsive alt='Carousel starWar' src='/Images/5.jpg' />
        </Carousel.Item>
      </Carousel>
    )
  }
}
