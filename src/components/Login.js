import React from 'react';
import {
    Link
} from "react-router-dom";


class Login extends React.Component {
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
                                    <input className={"login-input"} type="email"/>
                                </div>
                                <div>
                                    <p>Hasło</p>
                                    <input className={"login-input"} type="password"/>
                                </div>
                                <button className={"button-log-reg log-button"} type="submit">Zaloguj się</button>
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