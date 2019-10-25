import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from "./Component/NavBar";
import DashBoard from "./Component/DashBoard";
import Login from "./Component/Login";
import Footer from "./Component/Footer";
import ErrorPage from "./Component/ErrorPage"
class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			userName: "",
		}
	}
	componentDidMount(){
		
	}

	render() {
		return (
			<Router >
				<>
					<NavBar />
					<Switch>
						<Route  path="/" exact component={Login}></Route>
						<Route path="/dash" ><DashBoard/></Route>
						<Route path="/dash/:name" ><DashBoard/></Route>
						<Route path="/login"  component={Login}></Route>
						<Route path="/footer"  component={Footer}></Route>
						<Route component={ErrorPage}></Route>
					</Switch>
					<Footer/>
				</>
			</Router>
		);
	}

}

export default App;
