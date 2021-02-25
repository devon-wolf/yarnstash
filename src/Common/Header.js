import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from '../stylesheets/Header.module.css'

export default class Header extends Component {
	render() {
		return (
			<header className={style.header}>
					<h1>YARNSTASH</h1>
					<nav>
					<NavLink 
						exact 
						className={style.link}
						activeClassName={style.current}
						to="/">
						Home
					</NavLink>
					<NavLink 
						exact 
						className={style.link}
						activeClassName={style.current}
						to="/yarn">
						All Yarns
					</NavLink>
					<NavLink 
						exact 
						className={style.link}
						activeClassName={style.current}
						to="/new">
						Add New Yarn
					</NavLink>
					</nav>
			</header>
		)
	}
}
