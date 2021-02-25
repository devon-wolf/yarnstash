import './App.css';
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class Home extends Component {

	render() {
		
		return (
		<div className="App">
      		
			<header className="App-header">
        		<h1>YARNSTASH</h1>
        		<p>Want to see what random yarn I put in a list?</p>
      		</header>

			<main className="redirects">
					<section>
						<Link className="button-link" to="/yarn">See All the Yarn</Link>
					</section>
				
					<section>
						<Link className="button-link" to="/new">Add to the Yarnstash</Link>
					</section>
			</main>
    	
		</div>
		)
	}
}