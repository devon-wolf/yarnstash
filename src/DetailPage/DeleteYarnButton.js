import React, { Component } from 'react'

export default class DeleteYarnButton extends Component {
	render() {
		return (
			<button onClick={this.props.handleDeleteClick} value={this.props.value}>
				Delete This Yarn
			</button>
		)
	}
}
