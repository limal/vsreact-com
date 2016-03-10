import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Home from './js/components/Home.jsx';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Home}>
		</Route>
	</Router>,
	document.getElementById('app')
);
