import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from "./Component/NavBar";
import DashBoard from "./Component/DashBoard";
import Login from "./Component/Login";
import Footer from "./Component/Footer";
import CardPage from "./Component/CardPage";
import ErrorPage from "./Component/ErrorPage";
import UserPage from "./Component/UserPage";
import PlanPage from "./Component/PlanPage"
import AuthenticationRoute from "./Component/Service/AuthenticatedRoute";
import AuthenticationService from "./Component/Service/AuthenticationService";
class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			userName: "",
		}
	}
	render() {
		const loginSign = AuthenticationService.isUserLoggedIn();
		return (
			<Router >
				<>
					<NavBar isUserLoggedIn={loginSign} />
					<Switch>
						<Route  path="/" exact component={Login} ></Route>
						<AuthenticationRoute path="/dash"  exact><DashBoard/></AuthenticationRoute>
						<AuthenticationRoute path="/dash/:name" component={DashBoard}></AuthenticationRoute>
						<AuthenticationRoute path="/card/:label"  component={CardPage}></AuthenticationRoute>
						<Route path="/login"  component={Login}></Route>
						<AuthenticationRoute path="/user"  component={UserPage}></AuthenticationRoute>
						<AuthenticationRoute path="/plan" component={PlanPage}></AuthenticationRoute>
						<Route component={ErrorPage}></Route>
					</Switch>
					<Footer/>
				</>
			</Router>
		);
	}

}

export default App;
