import React from 'react';
import "./css/Login.css";
import ReactValidator from "./Service/FormErrors"
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AjaxServiceSignForm from './Service/AjaxServiceSignForm';
import AuthenticatedService from './Service/AuthenticationService';
import {connect} from "react-redux";
import {GetUserName, LoginUser, DeleteUser} from "../actions"
class Login extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			email: " ",
			registerName: "",
			registerPassword: "",
			registerPasswordAssure: "",
			checkedRadio1: true,
			checkedRadio2: false,
			tab1: "open",
			tab2: "close",
			emailValid: false,
			passwordValid: false,
			userValid: true,
		}
		this.validator = new ReactValidator();
		this.submitFormLogin = this.submitFormLogin.bind(this);
		sessionStorage.clear();
	}
	componentWillUpdate(nextState){
		if (this.state !== nextState){
			this.state = nextState;
		}
	}
	componentDidMount() {

	}
	async submitFormLogin(e) {
		const message = await AjaxServiceSignForm.loginExistUser(this.state.email, this.state.password);
		if (message.data === "valid"){
			const userName = await AjaxServiceSignForm.getUserName(this.state.email);
			this.props.LoginUser({email: this.state.email, password:this.state.password, username:userName.data});
			AuthenticatedService.recordUserName(this.state.username);
			// this.props.GetUserName({email: this.state.email, username:userName});
			this.props.history.push(`/dash/${this.state.email}`);
		} else if (message.data === "invalid"){
			this.setState({
				userValid: false
			})
		}
	}
	submitFormRegister = e => {
		e.preventDefault();
		if (this.state.registerPassword !== "" || this.state.registerPasswordAssure === this.state.registerPassword) {
			this.setState({
				passwordValid: true,
			})
		}
		if (this.validator.allValid() && (this.state.registerPasswordAssure === this.state.registerPassword)) {
			console.log("arrived");
			const Users = {
				fullName: this.state.registerName,
				password: this.state.registerPassword,
				email: this.state.email
			}
			AjaxServiceSignForm.registerNewUser(Users).then(
				() => {
					AuthenticatedService.registerSuccessfulLogin(this.state.email, this.state.registerName);
					this.props.history.push(`/dash/${Users.fullName}`);
					console.log(this.props);
				});
		} else {
			this.validator.showMessages();
			this.forceUpdate();
		}
	};
	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onChangeRadio = (e) => {
		if (e.target.id === "tab-1") {
			this.setState({
				checkedRadio1: true,
				checkedRadio2: false
			})
			this.validator.filterEmptyValue();
		} else if (e.target.id === "tab-2") {
			this.setState({
				checkedRadio1: false,
				checkedRadio2: true
			})
			this.validator.filterEmptyValue();
		}
	}
	render() {
		return (
			<div className="login-container" >
				<div className="login-wrap">
					<div className="login-html">
						<input id="tab-1" type="radio" name={this.state.tab1} className="sign-in" checked={this.state.checkedRadio1} onChange={this.onChangeRadio} /><label htmlFor="tab-1" className="tab">Login</label>
						<input id="tab-2" type="radio" name={this.state.tab2} className="sign-up" checked={this.state.checkedRadio2} onChange={this.onChangeRadio} /><label htmlFor="tab-2" className="tab">Register</label>
						<div className="login-form">
							<SignIn email={this.state.email} password={this.state.password} onChange={this.onChange} 
								submitFormLogin={this.submitFormLogin} userValid = {this.state.userValid} />
							<SignUp registerName={this.state.registerName} registerPassword={this.state.registerPassword}
								registerPasswordAssure={this.state.registerPasswordAssure} email={this.state.email} onChange={this.onChange}
								submitFormRegister={this.submitFormRegister} validator={this.validator}
								passwordValid={this.state.registerPasswordAssure === this.state.registerPassword} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
function mapStateToProps(state){
	return {
		email: state.users.email,
                username: state.users.username,
                password: state.users.password,
	}
}
export default connect(
	mapStateToProps,
	{
		LoginUser,
		GetUserName,
		DeleteUser
	}
)(Login);