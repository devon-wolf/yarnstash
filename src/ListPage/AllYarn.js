import '../App.css';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { getYarns } from '../api-utils'
import YarnList from './YarnList.js'
import Spinner from '../Common/Spinner.js'

export default class AllYarn extends Component {
	state = {
		loading: false,
		yarn: []
	}

	componentDidMount = async () => {
		await this.loadYarn();
	}

	loadYarn = async () => {
		this.setState({ loading: true, yarn: [] });
		const yarnData = await getYarns();
		this.setState({ loading: false, yarn: yarnData });
   }

	render() {
		
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
					{this.state.loading
					? <Spinner />
					: <YarnList data={this.state.yarn} />}
				</main>
			</div>
		)
	}
}