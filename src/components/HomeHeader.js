import React from 'react';
import {Link} from "react-router-dom";


class HomeHeader extends React.Component {
    render() {

        return (
            <>
                <div className={"home-header-container"}>
                    <div className={"home-header-image"}></div>
                    <div className={"home-header-article"}>
                        <div className={"home-header-text"}>
                            <p>Zacznij pomagać!</p><br/>
                            <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                            <div className={"home-header-line"}></div>
                        </div>
                        <div className={"home-header-links"}>
                            <Link to="/logowanie" className={"home-header-link"}>Oddaj <br/> rzeczy</Link>
                            <Link to="/logowanie" className={"home-header-link"}>Zorganizuj <br/> zbiórkę</Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default HomeHeader;