import React from 'react'
const URL_STARSHIP = 'https://swapi.co/api/starships/'

export default class Starship extends React.Component {
  constructor () {
    super()

    this.state = {
      isLoading: true,
      starship: {}
    }
  }

  _fetchStarship () {
    fetch(URL_STARSHIP + '4')
      .then(function (response) {
        return response.json()
      })
      .then((myJSON) => {
        this.setState({
          startship: myJSON
        })
        console.log(this.state.startship)
      })
  }

  render () {
    return (
      <div>
        <h2> Starship </h2>
      </div>)
  }
}
