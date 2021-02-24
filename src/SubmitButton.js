import React, { Component } from 'react'

export default class SubmitButton extends Component {

	handleSubmitClick = async e => {
		await this.props.submitFunction;
		// can save ^ to a const and return the added or updated item if wanted
	}

	render() {
		return (
			<button onClick={this.handleSubmitClick}>
				Submit
			</button>
		)
	}
}
