import React, { Component } from 'react'
import request from 'superagent'

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
			<div>
				<h1>ALL YARN PAGE</h1>
				{this.state.yarn.map(yarnObj =>
				<div key={yarnObj.name}>
					<h3>{yarnObj.name}</h3>
					<p>Brand: {yarnObj.brand}</p>
					<p>Material: {yarnObj.material}</p>
					<p>Color: {yarnObj.color}</p>
					<p>Weight: {yarnObj.yarn_weight}</p>
					<p>Quantity on Hand: {yarnObj.quantity}</p>
				</div>)}
			</div>
		)
	}
}