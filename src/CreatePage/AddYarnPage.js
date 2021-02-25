import React, { Component } from 'react'
import YarnForm from './YarnForm.js'

export default class AddYarnPage extends Component {
	state = {
		name: '',
		brand: '',
		material: '',
		color: '',
		weight_id: '',
		quantity: 0,
		partials: false
	}

	render() {
		console.log(this.state)
		return (
			<main>
				<YarnForm 
				handleSubmit={
					 e => console.log('Submit!')
				}
				handleNameChange={
					 e => this.setState({name: e.target.value})
				}
				handleBrandChange={
					 e => this.setState({brand: e.target.value})
				}
				handleMaterialChange={
					 e => this.setState({material: e.target.value})
				}
				handleColorChange={
					 e => this.setState({color: e.target.value})
				}
				handleWeightChange={
					 e => this.setState({weight_id: e.target.value})
				}
				data={[{id: 1, weight: 'worsted'}, {id: 2, weight: 'sport'}]}
				handleQuantityChange={
					 e => this.setState({quantity: Number(e.target.value)})
				}
				handleCheckbox={
					 e => this.setState({partials: !this.state.partials})
				}
				/>
			</main>
		)
	}
}
