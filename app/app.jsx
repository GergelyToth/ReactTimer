var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Components
var Main = require('Components/Main');

// Pages
var Timer = require('Components/Timer');
var Countdown = require('Components/Countdown');

// Foundation
$(document).foundation();

// App SCSS
require('style!css!sass!Styles/app.scss');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="countdown" component={Countdown}/>
			<IndexRoute component={Timer}/>
		</Route>
	</Router>,
	document.getElementById('app')
);