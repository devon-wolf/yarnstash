import './App.css';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { getYarnByID } from './api-utils.js'

export default class OneYarn extends Component {
	state = {
		yarn: {}
	}

	componentDidMount = async () => {
		await this.loadYarn();
	}

	loadYarn = async () => {
		this.setState({ yarn: {} });
		const yarnData = await getYarnByID(this.props.match.params.id);
		this.setState({ yarn: yarnData });
	}


	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>JUST ONE YARN</h1>
					<nav>
					<NavLink 
						exact 
						className="App-link"
						to="/">
						GO BACK
					</NavLink>
					</nav>
				</header>
				<main className="yarn-display">
				<div className="yarn-item">
					<h3>{this.state.yarn.name}</h3>
					<p>Brand: {this.state.yarn.brand}</p>
					<p>Material: {this.state.yarn.material}</p>
					<p>Color: {this.state.yarn.color}</p>
					<p>Weight: {this.state.yarn.weight}</p>
					<p>Quantity on Hand: {this.state.yarn.quantity}</p>
				</div>
				</main>
			</div>
		)
	}
}