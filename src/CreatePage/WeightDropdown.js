import React, { Component } from 'react'
import DropdownItem from '../Common/DropdownItem.js'

export default class WeightDropdown extends Component {
	render() {
		return (
			<select onChange={this.props.handleChange}>
				<option></option>
				{this.props.data.map(item =>
					<DropdownItem id={item.id} text={item.weight} key={item.id} />
				)}
			</select>
		)
	}
}
