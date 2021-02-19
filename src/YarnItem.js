import React, { Component } from 'react'

export default class YarnItem extends Component {
	render() {
		return (
			<div>
				<h3>{this.props.name}</h3>
				<p>Brand: {this.props.brand}</p>
				<p>Material: {this.props.material}</p>
				<p>Color: {this.props.color}</p>
				<p>Weight: {this.props.yarn_weight}</p>
				<p>Quantity on Hand: {this.props.quantity}</p>
				<p>Partial skeins? {this.props.partials}</p>
			</div>
		)
	}
}