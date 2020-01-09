import React from 'react';
import {
    Link
} from "react-router-dom";
import SvgIcon1 from './Icons/Icon1.js'
import SvgIcon2 from './Icons/Icon2.js'
import SvgIcon3 from './Icons/Icon3.js'
import SvgIcon4 from './Icons/Icon4.js'


class HomeSteps extends React.Component {
    render() {

        return (
            <>
                <div className={"steps__container"}>
                    <div className={"steps__header"}>
                        <p className={"steps__title"}>Wystarczą 4 proste kroki</p>
                        <p className={"line"}></p>
                    </div>
                    <div className={"steps__main"}>
                        <div className={"steps__element"}><SvgIcon1 width="83px" height="83px" /><SingleStep text1={"Wybierz rzeczy"} text2={"ubrania, zabawki, sprzęt i inne"}></SingleStep></div>
                        <div className={"steps__element"}><SvgIcon2 width="83px" height="83px" /><SingleStep text1={"Spakuj je"} text2={"skorzystaj z worków na śmieci"}></SingleStep></div>
                        <div className={"steps__element"}><SvgIcon3 width="83px" height="83px" /><SingleStep text1={"Zdecyduj komu chcesz pomóc"} text2={"wybierz zaufane miejsce"}></SingleStep></div>
                        <div className={"steps__element"}><SvgIcon4 width="83px" height="83px" /><SingleStep text1={"Zamów kuriera"} text2={"kurier przyjedzie w dogodnym terminie"}></SingleStep></div>

                    </div>
                    <div className={"steps__button-area"}>
                        <Link to="/logowanie" className={"steps__button"}>Oddaj <br /> rzeczy</Link>
                    </div>
                </div>
            </>
        )
    }
}
class SingleStep extends React.Component {
    render() {

        return (
            <>
                <div className={"steps__text"}>
                    <p className={"steps__title--medium"}>{this.props.text1}</p>
                    <hr className={"steps__line--small"} />
                    <p className={"steps__title--small"}>{this.props.text2}</p>
                </div>
            </>
        )
    }
}
export default HomeSteps;