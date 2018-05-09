import React, {
  Component
} from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'
import _urlToId from './_urlToId'

const URL_PEOPLE = 'https://swapi.co/api/people/'

export default class Personnage extends Component {
  constructor(props) {
    super(props)

    let idPerso = () => {
      return this.props.name !== undefined ? this.props.name : this.props.match.params.id
    }
    console.log(idPerso)

    this.state = {
      isLoading: true,
      personnage: {},
      id: idPerso(),
      specie: null,
      vehicles: [],
      starships: [],
      home: ''
    }
  }

  _fetchPersonnage(id = '1') {
    fetch(URL_PEOPLE + id)
      .then((response) => {
        return response.json()
      })
      .then((myJson) => {
        // set the state isLoading to false
        this.setState({
          isLoading: false
        })

        let specie = `https://swapi.co/api/species/${_urlToId(myJson.species[0])}`
        fetch(specie)
          .then(function(response) {
            return response.json()
          })
          .then((myJson) => {
            this.setState({
              specie: (myJson.name)
            })
          })

        // get the object myJson to the state personnage
        this.setState({
          personnage: myJson
        })

        this._fetchVehicle(this.state.personnage.vehicles)
        console.log(this.state.vehicles)
        this._fetchStarship(this.state.personnage.starships)
        console.log(this.state.starships)
        this._fetchHomeworld(this.state.personnage.homeworld)
        console.log(this.state.home)
      })
  }


  _fetchVehicle(request) {
    request.forEach(vehicle => {
      fetch(vehicle)
        .then(response => {
          return response.json()
        })
        .then(myJson => {
          let vehicles = this.state.vehicles
          vehicles.push(myJson.name)
          this.setState({
            vehicles: vehicles
          })
        })
    })
  }

  _fetchStarship(request) {
    request.forEach(starship => {
      fetch(starship)
        .then(response => {
          return response.json()
        })
        .then(myJson => {
          let starships = this.state.starships
          starships.push(myJson.name)
          this.setState({
            starships: starships
          })
        })
    })
  }

  _fetchHomeworld(request) {
    fetch(request)
      .then(response => {
        return response.json()
      })
      .then(planet => {
        this.setState({
          home: planet.name
        })
      })
  }

  componentWillMount() {
    this._fetchPersonnage(this.state.id)
  }
  render() {
    if (this.state.isLoading) {
      return ( <
        div >
        <
        p > Loading... < /p> <
        /div>
      )
    } else {
      return ( <
        Grid fluid >
        <
        Row className = 'Personnage' >
        <
        Col xs = {
          12
        } >
        <
        h2 className = 'text-center' > {
          this.state.personnage.name
        } < /h2> <
        /Col> <
        Col xs = {
          12
        } >
        <
        p > born in: {
          this.state.personnage.birth_year
        } < /p> <
        p > Sex: {
          this.state.personnage.gender
        } < /p> <
        p > Specie: {
          this.state.specie
        } < /p> <
        p > Height: {
          this.state.personnage.height
        }
        cm < /p> <
        p > Weight: {
          this.state.personnage.mass
        }
        kg < /p> <
        /Col> <
        /Row> <
        /Grid>
      )
    }
  }
}
