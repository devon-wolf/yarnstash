import '../App.css';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { getYarns, getYarnWeights } from '../api-utils.js'
import YarnList from './YarnList.js'
import Spinner from '../Common/Spinner.js'
import WeightDropdown from '../CreatePage/WeightDropdown.js'


export default class AllYarn extends Component {
	state = {
		loading: false,
		yarn: [],
		yarnWeights: [],
		weightID: ''
	}

	componentDidMount = async () => {
		await this.loadYarn();
	}

	loadYarn = async () => {
		this.setState({ loading: true, yarn: [] });
		const yarnData = await getYarns();
		const weightData = await getYarnWeights();
		this.setState({ loading: false, yarn: yarnData, yarnWeights: weightData });
   }


	render() {
		const filteredYarns = this.state.yarn.filter(yarnObj => {
			if (this.state.weight_id) {
				console.log(this.state.weight_id, yarnObj.weight_id);
				return Number(yarnObj.weight_id) === Number(this.state.weight_id);
			}
			else return true;
		});
		console.log(filteredYarns);
		return (
			<div className="App">
				<header className="App-header">
					<h1>ALL THE YARN</h1>
					<nav>
					<NavLink 
						exact 
						className="App-link"
						to="/">
						GO BACK
					</NavLink>
					</nav>
				</header>
				<main>
					<WeightDropdown 
					handleChange={e => this.setState({weight_id: e.target.value})}
					data={this.state.yarnWeights}
					weightValue={this.state.weight_id}	
					/>
					{this.state.loading
					? <Spinner />
					: <YarnList data={filteredYarns} />}
				</main>
			</div>
		)
	}
}