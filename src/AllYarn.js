import './App.css';
import React, { Component } from 'react'
import request from 'superagent'
import { NavLink } from 'react-router-dom'

export default class AllYarn extends Component {
	state = {
		yarn: []
	}

	componentDidMount = async () => {
		await this.loadYarn();
	}

	loadYarn = async () => {
		this.setState({ yarn: [] });
		const yarnData = await request.get(`https://glacial-mesa-65705.herokuapp.com/yarns`);
		this.setState({ yarn: yarnData.body });
   }

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>ALL THE YARN</h1>
					<nav>
					<NavLink 
						exact 
						className="App-link"
						to="/">
						GO BACK
					</NavLink>
					</nav>
				</header>
				<main>
				{this.state.yarn.map(yarnObj =>
				<div className="yarn-item" key={yarnObj.name}>
					<h3>{yarnObj.name}</h3>
					<p>Brand: {yarnObj.brand}</p>
					<p>Material: {yarnObj.material}</p>
					<p>Color: {yarnObj.color}</p>
					<p>Weight: {yarnObj.yarn_weight}</p>
					<p>Quantity on Hand: {yarnObj.quantity}</p>
				</div>)}
				</main>
			</div>
		)
	}
}