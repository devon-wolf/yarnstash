import React, { Component } from 'react'
import request from 'superagent';

export default class OneYarn extends Component {
	state = {
		yarn: {}
	}

	componentDidMount = async () => {
		await this.loadYarn();
	}

	loadYarn = async () => {
		this.setState({ yarn: {} });
		const yarnData = await request.get(`https://yarnstash.herokuapp.com/yarn/${this.props.match.params.id}`);
		this.setState({ yarn: yarnData.body });
	}


	render() {
		return (
			<div>
				<h1>ONE YARN PAGE</h1>
				<div>
					<h3>{this.state.yarn.name}</h3>
					<p>Brand: {this.state.yarn.brand}</p>
					<p>Material: {this.state.yarn.material}</p>
					<p>Color: {this.state.yarn.color}</p>
					<p>Weight: {this.state.yarn.yarn_weight}</p>
					<p>Quantity on Hand: {this.state.yarn.quantity}</p>
					<p>Partial skeins? {this.state.yarn.partials}</p>
				</div>
			</div>
		)
	}
}