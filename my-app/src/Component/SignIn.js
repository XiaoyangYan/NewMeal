import React from 'react';

const SignIn = (props) => {
        return (
                <form>
                <div className="sign-in-htm">
                    <div className="group">
                        <label htmlFor="user" className="label">Username</label>
                        <input id="username" name="username"  type="text" className="input"
                         placeholder="Please type your username"  value={props.username}
                               onChange = {props.onChange}/>
                    </div>
                    <div className="group">
                        <label htmlFor="pass" className="label">Password</label>
                        <input id="password" type="password" className="input" name="password" data-type="password" 
                        placeholder="Please type your password" value={props.password}
                               onChange={props.onChange}/>
                    </div>
                    <div className="group">
                        <div className="container">
                            <div id="captcha" style={{position: 'relative'}} data-type="password"></div>
                            <div id="msg"></div>
                        </div>
                    </div>
                    <div className="group">
                        <input id="check" type="checkbox" className="check" />
                        <label htmlFor="check"><span className="icon"></span> Keep Login</label>
                    </div>
                    <div className="group">
                        <input type="button" className="button" value="Login" onClick={props.sub} 
                        style={{letterSpacing: '4px', width: '30%'}}/>
                    </div>
                    <div className="hr"></div>
                    <div className="foot-lnk">
                        <a href="#forgot">Forget Password?</a>
                    </div>
                </div>
            </form>
        );

}
export default SignIn;