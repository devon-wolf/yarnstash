import React, { Component } from 'react'
import { deleteYarn } from '../api-utils'

export default class DeleteYarnButton extends Component {
	
	handleDeleteClick = async e => {
		// alert('Delete this yarn?');
		await deleteYarn(this.props.yarnID);
		// can save ^ to a variable and return the value if wanted
	}

	render() {
		return (
			<button onClick={this.handleDeleteClick}>
				Delete This Yarn
			</button>
		)
	}
}
