import React, { Component } from 'react'
import YarnItem from './YarnItem.js'
import style from '../stylesheets/YarnList.module.css'

export default class YarnList extends Component {
	render() {
		return (
			<ul className={style.list}>
				{this.props.data.map(yarnObj => 
				<YarnItem
					name={yarnObj.name}
					brand={yarnObj.brand}
					material={yarnObj.material}
					color={yarnObj.color}
					weight={yarnObj.weight}
					quantity={yarnObj.quantity}
					partials={yarnObj.partials ? 'yes' : 'no'}
					id={yarnObj.id}
					key={yarnObj.id}
				/>)}
			</ul>
		)
	}
}
