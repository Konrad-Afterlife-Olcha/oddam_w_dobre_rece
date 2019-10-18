import React from 'react';
import {
    Link
} from "react-router-dom";


class Logout extends React.Component {
    render() {

        return (
            <>
                <div className={"logout-container"}>
                    <div className={"logout-area"}>
                        <p>Wylogowanie nastąpiło pomyślnie!</p>
                        <div className={"home-header-line"}></div>
                        <button><Link to="/">Strona główna</Link></button>
                    </div>
                </div>
            </>
        )
    }
}
export default Logout;