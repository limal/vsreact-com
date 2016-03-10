import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Home from './js/components/Home.jsx';
import Profile from './js/components/Profile.jsx';
import Welcome from './js/components/Welcome.jsx';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Home}>
			<Route path="profile/:username" component={Profile} />
			<IndexRoute component={Welcome} />
		</Route>
	</Router>,
	document.getElementById('app')
);
