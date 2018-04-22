import React, { Component } from 'react'

export default class planet extends Component {
    constructor () {
        super()

        this.state = {
            isLoading : true,
            planet: {}
        }
    }

    _fetchPlanet () {
        fetch('https://swapi.co/api/planets/2/')
            .then( function (response) {
                return response.json()
            })
            .then ( (myJSON) =>  {
                this.setState({
                    isLoading: false
                })
                this.setState({
                    planet: myJSON
                })
            })
    }

    componentWillMount() {
        this._fetchPlanet()
    }

    render () {
        if ( this.state.isLoading) {
            return (
                <div>
                    <p> Wait, Please. It's loading...</p>
                </div>
            )
        } else {
            console.log(this.state.planet)
            return (
                <div>
                    <p> OK </p>
                </div>
            )
        }

    }
}
