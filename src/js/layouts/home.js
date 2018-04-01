import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

//Resources
// import '../../scss/layouts/home.scss';
import Profile from '../../img/profile_david.jpeg';
import CourtSupreme from '../../img/court_supreme.jpg';
import CourtDistrict from '../../img/court_district.jpg';

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
	render() {
		return (
			<div className="content main">
				<h1>Hello World</h1>
			</div>
		);
	}
}
