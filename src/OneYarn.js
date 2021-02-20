import './App.css';
import React, { Component } from 'react'
import request from 'superagent';
import { NavLink } from 'react-router-dom'

export default class OneYarn extends Component {
	state = {
		yarn: {}
	}

	componentDidMount = async () => {
		await this.loadYarn();
	}

	loadYarn = async () => {
		this.setState({ yarn: {} });
		const yarnData = await request.get(`https://glacial-mesa-65705.herokuapp.com/yarns/${this.props.match.params.id}`);
		this.setState({ yarn: yarnData.body });
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
				
				<div>
					<h3>{this.state.yarn.name}</h3>
					<p>Brand: {this.state.yarn.brand}</p>
					<p>Material: {this.state.yarn.material}</p>
					<p>Color: {this.state.yarn.color}</p>
					<p>Weight: {this.state.yarn.yarn_weight}</p>
					<p>Quantity on Hand: {this.state.yarn.quantity}</p>
				</div>
			</div>
		)
	}
}