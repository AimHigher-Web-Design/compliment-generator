import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

//Import components
import { Header } from './js/partial/header.js';
import { App } from './js/partial/app.js';

//Resources
import './scss/global.scss';

class Main extends React.Component {
	render() {
		return (
			<Fragment>
				<div id="main">{<App />}</div>
			</Fragment>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));
