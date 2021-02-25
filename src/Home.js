import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './stylesheets/Home.module.css'

export default class Home extends Component {

	render() {
		
		return (
		<main className={style.redirects}>
			<section>
				<Link className={style.buttonLink} to="/yarn">See All the Yarn</Link>
			</section>
				
			<section>
				<Link className={style.buttonLink} to="/new">Add to the Yarnstash</Link>
			</section>
		</main>
		)
	}
}