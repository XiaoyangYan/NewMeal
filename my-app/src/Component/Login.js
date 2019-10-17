import React from 'react';
import "./css/Login.css";
import ReactValidator from "./Service/FormErrors"
import SignIn from "./SignIn";
import SignUp from "./SignUp"
class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username:"",
            password: "",
            email: " ",
            registerName:"",
            registerPassword: "",
            registerPasswordAssure: "",
            checkedRadio1: true,
            checkedRadio2: false,
            tab1:"open",
            tab2: "close",
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
        }
        this.validator = new ReactValidator();
        sessionStorage.clear();
    }

    componentDidMount(){

    }
    
    submitFormRegister = (e) => {
        e.preventDefault();
        if (this.state.password !== "" || this.state.password === this.state.registerPassword){
            this.setState({
                passwordValid: true,
            })
        }
        if( this.validator.allValid() && (this.state.password === this.state.registerPassword) ){
          alert('You submitted the form and stuff!');
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
        if (e.target.id === "tab-1"){
            this.setState({
                checkedRadio1: true,
                checkedRadio2: false
            })
        } else  if (e.target.id === "tab-2"){
            this.setState({
                checkedRadio1: false,
                checkedRadio2: true
            })
        }
    }
    render() {
        return (
            <div className="container" style={{paddingTop: '100px'}}>
                <div className="login-wrap">
                    <div className="login-html">
                        <input id="tab-1" type="radio" name={this.state.tab1} className="sign-in"  checked={this.state.checkedRadio1} onChange={this.onChangeRadio}/><label htmlFor="tab-1" className="tab">Login</label>
                        <input id="tab-2" type="radio" name={this.state.tab2} className="sign-up" checked={this.state.checkedRadio2} onChange={this.onChangeRadio}/><label htmlFor ="tab-2" className="tab" onChange={this.onChangeRadio}>Register</label>
                        <div className="login-form">
                            <SignIn username={this.state.username} password={this.state.password} onChange={this.onChange} />
                            <SignUp registerName={this.state.registerName} registerPassword={this.state.registerPassword}  
                                registerPasswordAssure={this.state.registerPasswordAssure} email={this.state.email}    onChange={this.onChange}
                                submitFormRegister={this.submitFormRegister} validator={this.validator} passwordValid={this.state.password}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;