import React, { Component } from 'react'
import YarnForm from './YarnForm.js'

export default class AddYarnPage extends Component {
	state = {
		name: '',
		brand: '',
		material: '',
		color: '',
		weight: '',
		quantity: 0,
		partial: false
	}

	render() {
		return (
			<main>
				<YarnForm 
				handleSubmit={
					 e => console.log('Submit!')
				}
				handleNameChange={
					 e => console.log('name input change')
				}
				handleBrandChange={
					 e => console.log('brand input change')
				}
				handleMaterialChange={
					 e => console.log('material input change')
				}
				handleColorChange={
					 e => console.log('color input change')
				}
				handleWeightChange={
					 e => console.log('weight dropdown change')
				}
				data={[{id: 1, weight: 'worsted'}, {id: 2, weight: 'sport'}]}
				handleQuantityChange={
					 e => console.log('quantity input change')
				}
				handleCheckbox={
					 e => console.log('checkbox change')
				}
				/>
			</main>
		)
	}
}
