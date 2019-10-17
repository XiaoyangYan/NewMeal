import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from "./Component/NavBar";
import DashBoard from "./Component/DashBoard";
import Login from "./Component/Login";
function App() {
	return (
		<div className="App">
			<Router>
				<>
					<NavBar/>
					<Switch>
						{/* <Route page="/" exact component={Login}></Route> */}
						<Route page="/main" exact component={DashBoard}></Route>
					</Switch>
				</>
			</Router>
		</div>
	);
}

export default App;
