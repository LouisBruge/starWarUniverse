import React from 'react'
import _urlToId from '../_urlToId.js'
import Personnage from './Personnage.js'

export default class PersonnageList extends React.Component {
  render () {
    if (this.props.perso !== undefined) {
      const list = this.props.perso.map(perso => <Personnage name={_urlToId(perso.url)} key={_urlToId(perso.url)} />)
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
