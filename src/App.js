import React from 'react';
import './App.css';
import NavComponent from './components/NavComponent';
import FootComponet from './components/FootComponent';
import HomeContent from './components/HomeContent';
import ServiceComponent from './components/ServiceComponent';
import FaqComponent from './components/FaqComponent';
import BookSlotComponent from './components/BookSlotComponent';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<NavComponent />
				<Switch>
					<Route path="/" exact component={HomeContent} />
					<Route path="/home" exact component={HomeContent} />
					<Route path="/service" component={ServiceComponent} />
					<Route path="/booking" component={BookSlotComponent} />
					<Route path="/faq" component={FaqComponent} />
				</Switch>
				<FootComponet />
			</Router>
		</div>
	);
}

export default App;
