import React, { Component } from 'react'

export default class DropdownItem extends Component {
	render() {
		return (
			<option value={this.props.id}>
				{this.props.text}
			</option>
		)
	}
}
