var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Components
var Main = require('Components/Main');

// Foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App SCSS
require('style!css!sass!Styles/app.scss');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}></Route>
	</Router>,
	document.getElementById('app')
);