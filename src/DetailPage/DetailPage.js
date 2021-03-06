import '../App.css';
import React, { Component } from 'react'
import { getYarnByID } from '../api-utils.js'
import YarnItem from '../ListPage/YarnItem.js'
import style from '../stylesheets/DetailPage.module.css'
import YarnForm from '../CreatePage/YarnForm'
import { updateYarn, deleteYarn } from '../api-utils.js'
import DeleteYarnButton from './DeleteYarnButton';

export default class OneYarn extends Component {
	state = {
		id: '',
		name: '',
		brand: '',
		material: '',
		color: '',
		quantity: 0,
		partials: false,
		weight_id: '',
	}

	componentDidMount = async () => {
		await this.loadYarn();
	}

	loadYarn = async () => {
		this.setState({
			id: '',
			name: '',
			brand: '',
			material: '',
			color: '',
			quantity: 0,
			partials: false,
			weight_id: '',
		});

		const yarnData = await getYarnByID(this.props.match.params.id);

		this.setState({
			id: yarnData.id,
			name: yarnData.name,
			brand: yarnData.brand,
			material: yarnData.material,
			color: yarnData.color,
			quantity: yarnData.quantity,
			partials: yarnData.partials,
			weight_id: yarnData.weight_id,
		});
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const updatedYarn = this.state;
		await updateYarn(this.state.id, updatedYarn);
		this.props.history.push('/yarn');
	}

	handleDeleteClick = async () => {
		await deleteYarn(this.state.id);
		this.props.history.push('/yarn');
	}

	render() {
		return (
		<main>
			<section className={style.yarnDisplay}>
						<YarnItem
							name={this.state.name}
							brand={this.state.brand}
							material={this.state.material}
							color={this.state.color}
							weight={this.state.weight}
							quantity={this.state.quantity}
							partials={this.state.partials ? 'yes' : 'no'}
						/>
					</section>

			<section className={style.updateForm}>
						<h3>Update This Yarn</h3>
						<YarnForm
						handleSubmit={this.handleSubmit}
						
						name={this.state.name}
						handleNameChange={
							e => this.setState({name: e.target.value})
						}
						
						brand={this.state.brand}
						handleBrandChange={
							e => this.setState({brand: e.target.value})
						}
						
						material={this.state.material}
						handleMaterialChange={
							e => this.setState({material: e.target.value})
						}
						
						color={this.state.color}
						handleColorChange={
							e => this.setState({color: e.target.value})
						}
						
						weightValue={this.state.weight_id}
						handleWeightChange={
							e => this.setState({weight_id: e.target.value})
						}
						
						quantity={this.state.quantity}
						handleQuantityChange={
							e => this.setState({quantity: Number(e.target.value)})
						}

						partials={this.state.partials}
						handleCheckbox={
							e => this.setState({partials: !this.state.partials})
						}
						/>

						<DeleteYarnButton handleDeleteClick={this.handleDeleteClick} value={this.state.id}/>

					</section>
		</main>
		)
	}
}