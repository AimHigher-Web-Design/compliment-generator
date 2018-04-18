import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import ReactDOM from 'react-dom';
import Typed from 'typed.js';

//Resources
import {Info, Twitter, Globe, X, RefreshCcw, MessageSquare, Share2} from 'react-feather';
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
	constructor() {
		super();
		this.state = {
		  word: ''
		};
	};

	generateNum() {
		let sumWords = Adjectives.length;
		let word = Math.floor(Math.random() * Math.floor(sumWords));
		let adjective = Adjectives[word];

		this.setState({word: adjective});
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
		};

		this.typed = new Typed(this.el, options);
	};

	render() {
		return (
			<Fragment>
				<Share word={this.state.word} />
				<h1>I think you're <span ref={(el) => {this.el = el;}} id="adjective"></span></h1>
				<button className="refresh" onClick={() => this.newWord(this.generateNum())}>{<RefreshCcw />}</button>
				<About />
			</Fragment>
		);
	}
}

const About = () => (
	<div className="about icons">
		<a href="#about" title="Link to display the information page">
			<Info />
		</a>
		<div id="about">
			<a href="#" className="close"><X /></a>
			<h2>About this project</h2>
			<p>This seems pretty cool, and we can put text here about stuff</p>
			<p>This is based off the list of words at <a href="http://ideonomy.mit.edu/essays/traits.html" target="_blank" rel="nofollow">http://ideonomy.mit.edu/essays/traits</a> but a couple of the words might need removing.</p>
			<h2>About Sander</h2>
			<p>Sander lives in Perth and loves swing dancing and software development</p>
			<p>
				<a href="https://twitter.com/ahuijsen" target="_blank" rel="nofollow">
					<Twitter />
				</a>
				<a href="http://sanderhuijsen.com/" target="_blank" rel="nofollow">
					<Globe />
				</a>
			</p>
			<h2>About Amy</h2>
			<p>Amy is a freelance front end developer, starting her own business and working as an Evangalist for YOW! Conference.</p>
			<p>She enjoys spending her time in the community, speaking at events and blogs in her spare time (about tech, the web and life).</p>
			<p>
				<a href="https://twitter.com/Amys_Kapers" target="_blank" rel="nofollow">
					<Twitter />
				</a>
				<a href="https://amygoestoperth.com.au/" target="_blank" rel="nofollow">
					<Globe />
				</a>
			</p>
		</div>
	</div>
);

class Share extends Component {
	shareLinks(word) {
		let name = document.getElementById('name').value;
		let number = document.getElementById('number').value;
		let provider = document.querySelector('input[name="provider"]:checked').value;
		let articleLink = '';

		if(provider == 'twitter') {
			let url = "https://twitter.com/messages/compose?text=Hey%20" + name + ",%20I%20think%20you're%20";
			let urlWord = word.replace(' ', '%20');
			articleLink = url + urlWord;
		}
		else if(provider = 'sms') {
			let url = "sms:" + number + "?body=Hey " + name + "I think you're ";
			articleLink = url + word;
		}

		window.open(articleLink, '_blank');
	};

	render() {
		return (
			<Fragment>
				<div className="share icons">
					<a href="#share"><Share2 /></a>
				</div>
				<div id="share" className="share-modal">
					<a href="#" className="close"><X /></a>
					<div className="icons">
						<label><input type="radio" name="provider" value="twitter" /><Twitter /></label>
						<label><input type="radio" name="provider" value="sms" /><MessageSquare /></label>
					</div>
					<input id="name" type="text" placeholder="Their name" />
					<input id="number" type="text" placeholder="Their number" />
					<button type="button" onClick={() => this.shareLinks(this.props.word)}>Send them some love</button>
				</div>
			</Fragment>
		);
	};
};