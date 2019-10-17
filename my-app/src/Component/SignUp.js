import React from 'react';

const SignUp = (props) => {
        return (
                <form>
                        <div className="sign-up-htm">
                                <div className="group">
                                        <label htmlFor="user" className="label">Username</label>
                                        <input id="users" type="text" className="input" name="registerName" placeholder="Please type your username"
                                                value={props.registerName} onChange={props.onChange} />
                                        <div style={{ color: 'red' }}>{props.validator.message('registerName', props.registerName, 'required', '', {
                                                required: 'username cannot be null'
                                        })}</div>

                                </div>
                                <div className="group">
                                        <label htmlFor="pass" className="label">Password</label>
                                        <input id="passs" type="password" className="input" data-type="password" name="registerPassword"
                                                placeholder="Please type your password" value={props.registerPassword} onChange={props.onChange} />
                                        <div style={{ color: 'red' }}> {props.validator.message('registerPassword', props.registerPassword, 'required', '', {
                                                required: 'password cannot be null'
                                        })}</div>
                                        {(props.passwordValid) && <div style={{ color: 'red' }}>password doesn't match</div>}
                                </div>
                                <div className="group">
                                        <label htmlFor="pass" className="label">Reassure Password</label>
                                        <input id="passs" type="password" className="input" data-type="password" name="registerPasswordAssure"
                                                placeholder="Please retype your password" value={props.registerPasswordAssure} onChange={props.onChange} />
                                        {(props.passwordValid) && <div style={{ color: 'red' }}>password doesn't match</div>}
                                </div>
                                <div className="group">
                                        <label htmlFor="pass" className="label">Email</label>
                                        <input id="pass" type="text" className="input" name="email"
                                                placeholder="Please type your email" value={props.email} onChange={props.onChange} />
                                        <div style={{ color: 'red' }}>{props.validator.message('email', props.email, 'required|email', '', {
                                                required: 'email cannot be empty',
                                                email: 'the format of email is not correct'
                                        })}</div>
                                </div>
                                <div className="group">
                                        <a href="/"><input type="submit" className="button" value="Register" style={{ letterSpacing: '4px', width: '30%' }}
                                                onClick={props.submitFormRegister} /></a>
                                </div>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                        <label htmlFor="tab-1"> Login Before?</label>
                                </div>
                        </div>
                </form>
        );
}
export default SignUp;