import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from "./Component/NavBar";
import DashBoard from "./Component/DashBoard";
import Login from "./Component/Login";
import Footer from "./Component/Footer";
class App extends React.Component {
	render() {
		return (
			<Router >
				<>
					<NavBar />
					<Switch>
						<Route  path="/" exact component={Login}></Route>
						<Route path="/dash/:name" ><DashBoard/></Route>
						<Route path="/login"  component={Login}></Route>
						<Route path="/footer"  component={Footer}></Route>
						<Route component={Footer}></Route>
					</Switch>
				</>
			</Router>
		);
	}

}

export default App;
