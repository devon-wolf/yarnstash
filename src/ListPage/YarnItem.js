import React, { Component } from 'react'
import style from '../stylesheets/YarnList.module.css'
import { Link } from 'react-router-dom'
import DeleteYarnButton from '../DetailPage/DeleteYarnButton'

export default class YarnItem extends Component {

	render() {
		return (
			<li className={style.listItem}>
				<h3>{this.props.name}</h3>
				<p><em>Brand:</em> {this.props.brand}</p>
				<p><em>Material:</em> {this.props.material}</p>
				<p><em>Color:</em> {this.props.color}</p>
				<p><em>Weight:</em> {this.props.weight}</p>
				<p><em>Quantity on Hand:</em> {this.props.quantity}</p>
				<p><em>Partial skeins?</em> {this.props.partials}</p>
				<Link to={`yarn/${this.props.id}`}>
					Edit Yarn
				</Link>
				<DeleteYarnButton handleDeleteClick={this.props.handleDeleteClick} value={this.props.value}/>
			</li>
		)
	}
}