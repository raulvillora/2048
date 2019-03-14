import React, { Component } from 'react';
import '../App.css';

export default class LandingPage extends Component {
	render = () => {
		return (
			<h1 onClick={this.props.handleLandingPageClick} onTouchStart={this.props.handleLandingPageClick}>
				<span>W</span>
				<span>e</span>
				<span>l</span>
				<span>c</span>
				<span>o</span>
				<span>m</span>
				<span>e</span>
				<br />
				<span>t</span>
				<span>o</span>
				<br />
				<span>2</span>
				<span>0</span>
				<span>4</span>
				<span>8</span>
				<span>!</span>
			</h1>
		);
	};
}
