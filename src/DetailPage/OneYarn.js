import '../App.css';
import React, { Component } from 'react'
import { getYarnByID } from '../api-utils.js'
import YarnItem from '../ListPage/YarnItem.js'
import style from '../stylesheets/DetailPage.module.css'
import YarnForm from '../CreatePage/YarnForm';

export default class OneYarn extends Component {
	state = {
		yarn: {},
	}

	componentDidMount = async () => {
		await this.loadYarn();
	}

	loadYarn = async () => {
		this.setState({ yarn: {} });
		const yarnData = await getYarnByID(this.props.match.params.id);
		this.setState({ 
			yarn: yarnData
		});
	}

	handleSubmit = () => console.log('Submit!');

// NOTE TO SELF: not all ids exist anymore, need to remove hardcoded ids in the homepage dropdown, make these click-throughs from the list page

	render() {
	
		console.log(this.state);
		return (
			<div className="App">
				<header className="App-header">
					<h1>JUST ONE YARN</h1>
				</header>
				<main>
				<section className={style.yarnDisplay}>
					<YarnItem
						name={this.state.yarn.name}
						brand={this.state.yarn.brand}
						material={this.state.yarn.material}
						color={this.state.yarn.color}
						weight={this.state.yarn.weight}
						quantity={this.state.yarn.quantity}
						partials={this.state.yarn.partials ? 'yes' : 'no'}
					/>
				</section>

				<section className={style.yarnDisplay}>
				<YarnForm
				handleSubmit={this.handleSubmit}
				
				name={this.state.yarn.name}
				handleNameChange={
					 e => this.setState({name: e.target.value})
				}
				
				brand={this.state.yarn.brand}
				handleBrandChange={
					 e => this.setState({brand: e.target.value})
				}
				
				material={this.state.yarn.material}
				handleMaterialChange={
					 e => this.setState({material: e.target.value})
				}
				
				color={this.state.yarn.color}
				handleColorChange={
					 e => this.setState({color: e.target.value})
				}
				
				weightValue={this.state.yarn.weight_id}
				handleWeightChange={
					 e => this.setState({weight_id: e.target.value})
				}
				
				data={[{id: 1, weight: 'worsted'}, {id: 2, weight: 'sport'}]}
				
				quantity={this.state.yarn.quantity}
				handleQuantityChange={
					 e => this.setState({quantity: Number(e.target.value)})
				}

				partials={this.state.yarn.partials}
				handleCheckbox={
					 e => this.setState({partials: !this.state.partials})
				}
					/>
				</section>
				</main>
			</div>
		)
	}
}