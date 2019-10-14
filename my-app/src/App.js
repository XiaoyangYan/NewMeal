import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from "./Component/NavBar"
function App() {
	return (
		<div className="App">
			<Router>
				<>
					<NavBar/>
					<Switch>
						<Route page="/"></Route>
					</Switch>
				</>
			</Router>
		</div>
	);
}

export default App;
