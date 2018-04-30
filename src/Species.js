import React from 'react'

export default class Species extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      species: {}
    }
  }
}
