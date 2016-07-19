var React = require('react');

var Nav = require('Components/Nav');

var Main = props => (
	<div>
		<Nav/>
		<p>Main.jsx rendered.</p>
		{props.children}
	</div>
);

module.exports = Main;