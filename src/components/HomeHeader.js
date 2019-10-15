import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class HomeHeader extends React.Component {
    render() {

        return (
            <>
                <div style={{
                    height: "100vh"
                }}>
                HomeHeader
                    <Link to="/logowanie">Oddaj rzeczy</Link>
                    <Link to="/logowanie">Zorganizuj zbiórkę</Link>
                </div>
            </>
        )
    }
}
export default HomeHeader;