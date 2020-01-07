import React from 'react';
import { Link } from "react-router-dom";


class HomeHeader extends React.Component {
    render() {

        return (
            <>
                <div className={"header__container"}>
                    <div className={"header__image"}></div>
                    <div className={"header__article"}>
                        <div className={"header__text"}>
                            <p>Zacznij pomagać!</p><br />
                            <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                            <div className={"home-header-line"}></div>
                        </div>
                        <div className={"header__links"}>
                            <Link to="/logowanie" className={"header__link"}>Oddaj <br /> rzeczy</Link>
                            <Link to="/logowanie" className={"header__link"}>Zorganizuj <br /> zbiórkę</Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default HomeHeader;