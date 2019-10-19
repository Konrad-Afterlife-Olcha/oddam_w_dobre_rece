import React from 'react';
import {Link} from "react-router-dom";


class Register extends React.Component {
    constructor(){
        super()
        this.state = {
            password: "",
            password2: "",
            email: "",
            invalidPassword: false,
            invalidPassword2: false,
            invalidEmail: false
        }
    }
    emailValidation = () => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(this.state.email).toLowerCase())) {
            this.setState({
                invalidEmail: true
            });
            console.log("niepoprawny email");
            return false
        } else {return true}
    };
    passwordValidation = () => {
        if(this.state.password.length <6){
            this.setState({
                invalidPassword: true
            });
            console.log("Hasło za krótkie");
            return false
        }
        else {return true}
    }
    password2Validation = () => {
        if(this.state.password !== this.state.password2){
            this.setState({
                invalidPassword2: true
            })
            console.log("Hasła się różnią")
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
                            <h2 className={"login-h2"}>Załóż konto</h2>
                            <div className={"home-header-line"}></div>
                        </div>

                        <div className={"login-inputs-area reg-inputs-area"}>
                            <form className={"login-inputs"} action="">

                                <div>
                                    <p>Email</p>
                                    <input className={"login-input"} type="email" onChange={(e)=>(
                                        this.setState({
                                            email: e.target.value,
                                            invalidEmail: false
                                        })
                                    )} value={this.state.email}/>
                                    {this.state.invalidEmail ? <p className={"invalid-input"}>Podany email jest nieprawidłowy!</p> : null}
                                </div>
                                <div>
                                    <p>Hasło</p>
                                    <input className={"login-input"} type="password" onChange={(e)=>(
                                        this.setState({
                                            password: e.target.value,
                                            invalidPassword: false
                                        })
                                    )} value={this.state.password}/>
                                    {this.state.invalidPassword ? <p className={"invalid-input"}>Podane hasło jest za krótkie!</p> : null}
                                </div>
                                <div>
                                    <p>Powtórz hasło</p>
                                    <input className={"login-input"} type="password" onChange={(e)=>(
                                        this.setState({
                                            password2: e.target.value,
                                            invalidPassword2: false
                                        })
                                    )} value={this.state.password2}/>
                                    {this.state.invalidPassword2 ? <p className={"invalid-input"}>Hasła się różnią!</p> : null}
                                </div>
                                <button onClick={(e)=>{
                                    e.preventDefault();
                                    this.emailValidation();
                                    this.passwordValidation();
                                    this.password2Validation();
                                    if(this.emailValidation() && this.passwordValidation() && this.password2Validation()){
                                        console.log("Rejestracja zakończona pomyslnie")
                                    }
                                }} className={"log-button"} type="submit">Załóż konto</button>
                            </form>
                        </div>
                        <button className={"reg-button"}><Link to="/logowanie">Zaloguj się</Link></button>
                    </div>
                </div>
            </>
        )
    }
}
export default Register;