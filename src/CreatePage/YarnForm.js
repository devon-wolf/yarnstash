import React, { Component } from 'react'
import WeightDropdown from './WeightDropdown.js'
import TextInput from '../Common/TextInput.js'
import style from '../stylesheets/CreatePage.module.css'

export default class YarnForm extends Component {

	render() {
		return (
			<form className={style.form} onSubmit={this.props.handleSubmit}>
				<label>
					Name
					<TextInput handleChange={this.props.handleNameChange}/>
				</label>
				
				<label>
					Brand
					<TextInput handleChange={this.props.handleBrandChange}/>
				</label>
				
				<label>
					Material
					<TextInput handleChange={this.props.handleMaterialChange}/>
				</label>
				
				<label>
					Color
					<TextInput handleChange={this.props.handleColorChange}/>
				</label>
				
				<label>
					Weight
					<WeightDropdown handleChange={this.props.handleWeightChange} data={this.props.data} />
				</label>
				
				<label>
					Quantity on Hand
					<input type="number" onChange={this.props.handleQuantityChange} />
				</label>

				<label>
					Partial skeins?
					<input type="checkbox" onChange={this.props.handleCheckbox} />
				</label>
				<button>Submit</button>
			</form>
		)
	}
}
