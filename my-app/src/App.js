import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from "./Component/NavBar";
import DashBoard from "./Component/DashBoard";
function App() {
	return (
		<div className="App">
			<Router>
				<>
					<NavBar/>
					<Switch>
						<Route page="/" exact component={DashBoard}></Route>
					</Switch>
				</>
			</Router>
		</div>
	);
}

export default App;
