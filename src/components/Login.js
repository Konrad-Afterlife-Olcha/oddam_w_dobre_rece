import React from 'react';
import {
    Link
} from "react-router-dom";


class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            email : "",
            password: "",
            emailInvalid: false,
            passwordInvalid: false,
            loginSuccess: false
        }
    }
    emailValidation = () => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(this.state.email).toLowerCase())) {
            this.setState({
                emailInvalid: true
            })
            console.log("niepoprawny email")
            return false
        } else {return true}
    };
    passwordValidation = () => {
        if(this.state.password.length <6){
            this.setState({
                passwordInvalid: true
            })
            console.log("Hasło za krótkie")
            return false
        }
        else {return true}
    }


    render() {

        return (
            <>
                <div className={"login-container"}>

                    <div className={"login-area"}>
                        <div className={"login-header"}>
                            <h2 className={"login-h2"}>Zaloguj się</h2>
                            <div className={"home-header-line"}></div>
                        </div>
                        
                        <div className={"login-inputs-area"}>
                            <form className={"login-inputs"} action="">
                                <div>
                                    <p>Email</p>
                                    <input onChange={(e)=>(
                                        this.setState({
                                            email: e.target.value,
                                            emailInvalid: false
                                        })
                                    )} className={"login-input"} type="email" value={this.state.email}/>
                                    {this.state.emailInvalid ? <p className={"invalid-input"}>Podany email jest nieprawidłowy!</p> : null}
                                </div>
                                <div>
                                    <p>Hasło</p>
                                    <input onChange={(e)=>(
                                        this.setState({
                                            password: e.target.value,
                                            passwordInvalid: false,
                                        })
                                    )} className={"login-input"} type="password" value={this.state.password}/>
                                    {this.state.passwordInvalid ? <p className={"invalid-input"}>Podane hasło jest za krótkie!</p> : null}
                                </div>
                                <button onClick={(e)=> {
                                        e.preventDefault();
                                        this.emailValidation();
                                        this.passwordValidation();
                                        if(this.emailValidation() && this.passwordValidation()){
                                            this.setState({
                                                loginSuccess: true,
                                                email : "",
                                                password: "",
                                                emailInvalid: false,
                                                passwordInvalid: false,
                                            })
                                            console.log("Pomyślnie zalogowano")
                                        }
                                }} className={"button-log-reg log-button"} type="submit">Zaloguj się</button>
                            </form>
                        </div>
                        <button className={"button-log-reg reg-button"}><Link to="/rejestracja">Załóż konto</Link></button>
                    </div>
                </div>
            </>
        )
    }
}
export default Login;