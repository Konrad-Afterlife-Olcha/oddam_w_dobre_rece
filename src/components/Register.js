import React from 'react';
import {Link} from "react-router-dom";


class Register extends React.Component {
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
                                    <input className={"login-input"} type="email"/>
                                </div>
                                <div>
                                    <p>Hasło</p>
                                    <input className={"login-input"} type="password"/>
                                </div>
                                <div>
                                    <p>Powtórz hasło</p>
                                    <input className={"login-input"} type="password"/>
                                </div>
                                <button className={"log-button"} type="submit">Załóż konto</button>
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