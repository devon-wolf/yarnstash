import React, { Component } from 'react'
import YarnItem from './YarnItem.js'

export default class YarnList extends Component {
	render() {
		return (
			<div>
				{this.props.data.map(yarnObj => 
				<YarnItem
				name={yarnObj.name}
				brand={yarnObj.brand}
				material={yarnObj.material}
				color={yarnObj.color}
				yarn_weight={yarnObj.yarn_weight}
				quantity={yarnObj.quantity}
				partials={yarnObj.partials}
				/>)}
			</div>
		)
	}
}
