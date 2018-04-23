import React from 'react'

export default class Starship extends React.Component {
  constructor () {
    super()

    this.state = {
      isLoading: true,
      starship: {}
    }
  }

  render () {
    return (
      <div>
        <h2> Starship </h2>
      </div>)
  }
}
