import React, { Component } from 'react'
import WeightDropdown from './WeightDropdown.js'
import style from '../stylesheets/CreatePage.module.css'
import { getYarnWeights } from '../api-utils.js'

export default class YarnForm extends Component {
	state = {
		yarnWeights: []
	}

	componentDidMount = async () => {
		const weightData = await getYarnWeights();
		this.setState({ yarnWeights: weightData });
	}

	render() {

		return (
			<form className={style.form} onSubmit={this.props.handleSubmit}>
				<label>
					Name
					<input onChange={this.props.handleNameChange} value={this.props.name} />
				</label>
				
				<label>
					Brand
					<input onChange={this.props.handleBrandChange} value={this.props.brand} />
				</label>
				
				<label>
					Material
					<input onChange={this.props.handleMaterialChange} value={this.props.material} />
				</label>
				
				<label>
					Color
					<input onChange={this.props.handleColorChange} value={this.props.color} />
				</label>
				
				<label>
					Weight
					<WeightDropdown handleChange={this.props.handleWeightChange} data={this.state.yarnWeights} weightValue={this.props.weightValue} />
				</label>
				
				<label>
					Quantity on Hand
					<input type="number" onChange={this.props.handleQuantityChange} value={this.props.quantity} />
				</label>

				<label>
					Partial skeins?
					<input type="checkbox" onChange={this.props.handleCheckbox} value={this.props.partials} checked={this.props.partials} />
				</label>
				<button>Submit</button>
			</form>
		)
	}
}
