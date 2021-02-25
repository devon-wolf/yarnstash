import '../App.css';
import React, { Component } from 'react'
import { getYarnByID } from '../api-utils.js'
import YarnItem from '../ListPage/YarnItem.js'
import style from '../stylesheets/DetailPage.module.css'

export default class OneYarn extends Component {
	state = {
		yarn: {}
	}

	componentDidMount = async () => {
		await this.loadYarn();
	}

	loadYarn = async () => {
		this.setState({ yarn: {} });
		const yarnData = await getYarnByID(this.props.match.params.id);
		this.setState({ yarn: yarnData });
	}

// NOTE TO SELF: not all ids exist anymore, need to remove hardcoded ids in the homepage dropdown, make these click-throughs from the list page

	render() {
		
		return (
			<div className="App">
				<header className="App-header">
					<h1>JUST ONE YARN</h1>
				</header>
				<main className={style.yarnDisplay}>
					<YarnItem
					name={this.state.yarn.name}
					brand={this.state.yarn.brand}
					material={this.state.yarn.material}
					color={this.state.yarn.color}
					weight={this.state.yarn.weight}
					quantity={this.state.yarn.quantity}
					partials={this.state.yarn.partials ? 'yes' : 'no'}
					/>
				</main>
			</div>
		)
	}
}