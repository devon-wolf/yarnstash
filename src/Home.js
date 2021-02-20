import './App.css';
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class Home extends Component {
	state = {
		dropdown: ''
	}

	handleDropdown = e => {
		this.setState({ dropdown: e.target.value })
	}

	handleDropdownClick = () => {
		if (this.state.dropdown) {
			<Redirect to={`/yarn/${this.state.dropdown}`} />
		}
	}

	render() {
		console.log(this.state.dropdown);
		return (
		<div className="App">
      		
			<header className="App-header">
        		<h1>YARNSTASH</h1>
        		<p>Want to see what random yarn I put in a list?</p>
      		</header>

			<main>
				<nav className="redirects">
					<section>
						<Link className="button-link" to="/yarn">See All the Yarn</Link>
					</section>
				
					<section>
						<select onChange={this.handleDropdown}>
							<option value="">--</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
						</select>
						{ this.state.dropdown
						? <Link className="dropdown-link" to={`/yarn/${this.state.dropdown}`}>...but you decide to click anyway</Link>
						: <span>You don't know what these numbers mean...</span>}
					</section>
				</nav>
			</main>
    	
		</div>
		)
	}
}