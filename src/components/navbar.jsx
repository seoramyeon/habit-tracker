import React, { PureComponent } from 'react';

class Navbar extends PureComponent {

	render() {
		return (
			<header className="header">
			<h1>🌿 Habit Tracker {this.props.totalCount}</h1>
			</header>
		);
	}
}

export default Navbar;