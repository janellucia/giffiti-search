import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as Actions from '../actions';

class Header extends React.Component {
  handleSignout() {
    this.props.signOutUser();
  }

  renderAuthLinks() {
    if (this.props.authenticated) {
      return [
        <li key={1}>
          <Link to="/favorites">Favourites</Link>
        </li>,
        <li key={2}>
          <a href="#" onClick={() => this.handleSignout()}>Sign Out</a>
        </li>
      ]
    } else {
      return [
        <li key={1}>
          <Link to="/login">Login</Link>
        </li>,
        <li key={2}>
          <Link to="/signup">Sign Up</Link>
        </li>
      ]
    }
  }

  render() {
    return (
      <div className="header">
        <Link to="/" className="title">Giffiti Search</Link>
        <nav>
         	<ul>
           { this.renderAuthLinks() }
        	</ul>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, Actions)(Header);