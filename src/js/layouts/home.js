import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import ReactDOM from 'react-dom';
import Typed from 'typed.js';

//Resources
// import '../../scss/layouts/home.scss';
import Adjectives from '../data/adjectives.js';

class Meta extends Component {
	render() {
		let name = 'Compliment Generator';
		let description = "Can't think of something nice to say? We can come up with it for you";
		let image = '';
		let url = '';
		return (
			<Helmet>
				<title>{name}</title>
				<meta name="description" content={description} />
				<link rel="canonical" href={url} />

				{/* Facebook */}
				<meta property="og:url" content={url} />
				<meta property="og:title" content={name} />
				<meta property="og:image" content={image} />
				<meta property="og:description" content={description} />

				{/* Twitter */}
				<meta name="twitter:url" content={url} />
				<meta name="twitter:title" content={name} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={image} />
			</Helmet>
		);
	}
}

export class Home extends Component {
	generateNum() {
		let sumWords = Adjectives.length;
		let word = Math.floor(Math.random() * Math.floor(sumWords));
		let adjective = Adjectives[word];

		return (adjective);
	}

	componentDidMount() {
		let words = this.generateNum();

		const options = {
			strings: [words],
			typeSpeed: 50,
			backspeed: 80,
			fadeOut: true,
			showCursor: false,
			// loop: true
		};

		this.typed = new Typed(this.el, options);			
	};

	newWord(adjective) {
		let words = adjective;

		const options = {
			strings: [words],
			typeSpeed: 80,
			backspeed: 80,
			fadeOut: true,
			showCursor: false,
			// loop: true
		};

		this.typed = new Typed(this.el, options);
	}

	render() {
		return (
			<div className="content main">
				<h1>I think you're <span ref={(el) => {this.el = el;}} id="adjective"></span></h1>
				<button onClick={() => this.newWord(this.generateNum())}>Not quite right? Try a different word!</button>
			</div>
		);
	}
}