import React from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';


export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}