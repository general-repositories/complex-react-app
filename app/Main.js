import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// My Components
import Header from './components/Header';
import HomeGuest from './components/HomeGuest';
import Footer from './components/Footer';
import About from './components/About';
import Terms from './components/Terms';

// J8JLmwxy37q8FSR4
// mongodb+srv://tinkerDotBin:J8JLmwxy37q8FSR4@cluster0.djtna.mongodb.net/ReactCourse?retryWrites=true&w=majority

const Main = () =>
{
	return(
		<BrowserRouter>
			<Header/>
			<Switch>
				<Route path="/" exact>
					<HomeGuest/>
				</Route>
				<Route path="/about-us">
					<About/>
				</Route>
				<Route path="/terms">
					<Terms/>
				</Route>
			</Switch>
			<Footer/>
		</BrowserRouter>
	)
}

ReactDOM.render(<Main/>, document.getElementById('app'));

if(module.hot)
{
	module.hot.accept();
}