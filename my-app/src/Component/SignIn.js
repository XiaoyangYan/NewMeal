import React from 'react';

const SignIn = (props) => {
        return (
                <form>
                <div className="sign-in-htm">
                    <div className="group">
                        <label htmlFor="email" className="label">Email</label>
                        <input id="email" name="email"  type="text" className="input" 
                         placeholder="Please type your email"  value={props.email}
                               onChange = {props.onChange}/>
                    </div>
                    <div className="group">
                        <label htmlFor="password" className="label">Password</label>
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
                        <input type="button" className="button" value="Login" onClick={props.submitFormLogin} 
                        style={{letterSpacing: '4px', width: '30%'}}/>
                    </div>
                    {(!props.userValid) && <div style={{ color: 'red' }}>Invalid User</div>}
                    <div className="hr"></div>
                    <div className="foot-lnk">
                        <a href="#forgot">Forget Password?</a>
                    </div>
                </div>
            </form>
        );

}
export default SignIn;