import React from 'react'

export default class Navbar extends React.Component {
    render ()  {
        return (
            <navbar>
                <a href="/"> Star War Univers API </a>

                <ul>
                    <li><a href="#">Personnages </a></li>
                    <li><a href="#">Planets </a></li>
                    <li><a href="#">Films </a></li>
                </ul>
            </navbar>
        )
    }
}
