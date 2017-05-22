import React from 'react';

class Footer extends React.Component{
	render(){
		return(
			<div className="footer">
				<p>App created with ❤️ by <a href="http://janellucia.com" target="new">Janel Lucia</a></p>
				<p>API Powered by <a href="https://giphy.com/">GIPHY</a></p>
				<p>&copy; Copyright 2017</p>
			</div>
		);
	}
}

export default Footer;