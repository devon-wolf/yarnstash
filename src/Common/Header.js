import React, { Component } from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
	render() {
		return (
			<header>
					<h1>YARNSTASH</h1>
					<nav>
					<NavLink 
						exact 
						className="App-link"
						activeClassName="current"
						to="/">
						Home
					</NavLink>
					<NavLink 
						exact 
						className="App-link"
						activeClassName="current"
						to="/yarn">
						All Yarns
					</NavLink>
					<NavLink 
						exact 
						className="App-link"
						activeClassName="current"
						to="/new">
						Add New Yarn
					</NavLink>
					</nav>
			</header>
		)
	}
}
