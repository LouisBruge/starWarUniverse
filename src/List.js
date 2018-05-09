import React from 'react'
import _urlToId from './_urlToId.js'
import Personnage from './Personnage/Personnage.js'

export default class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      component: {
        people: Personnage
      }
    }
  }
  render () {
    if (this.props.result !== undefined) {
      const Category = this.state.component['people']
      const list = this.props.result.map(query => <Category name={_urlToId(query.url)} key={_urlToId(query.url)} />)
      return (
        <section id='PersonnageList'>
          {list}
        </section>
      )
    } else {
      return null
    }
  }
}
