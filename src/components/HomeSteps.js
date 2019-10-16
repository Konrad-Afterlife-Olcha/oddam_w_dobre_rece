import React from 'react';
import {
    Link
} from "react-router-dom";

class HomeSteps extends React.Component {
    render() {

        return (
            <>
                <div className={"home-steps-container"}>
                    <div className={"home-steps-header"}>
                        <p>Wystarczą 4 proste kroki</p>
                        <p className={"home-steps-line"}></p>
                    </div>
                    <div className={"home-steps-fourSteps"}>
                        <div className={"home-steps-fourSteps-container"}>
                            <SingleStep iconClass={"home-steps-icon1"} text1={"Wybierz rzeczy"} text2={"ubrania, zabawki, sprzęt i inne"}/>
                            <SingleStep iconClass={"home-steps-icon2"} text1={"Spakuj je"} text2={"skorzystaj z worków na śmieci"}/>
                            <SingleStep iconClass={"home-steps-icon3"} text1={"Zdecyduj komu chcesz pomóc"} text2={"wybierz zaufane miejsce"}/>
                            <SingleStep iconClass={"home-steps-icon4"} text1={"Zamów kuriera"} text2={"kurier przyjedzie w dogodnym terminie"}/>
                        </div>
                    </div>
                    <div className={"home-steps-bottom"}>
                        <Link to="/logowanie" className={"home-steps-button"}>Oddaj <br/> rzeczy</Link>
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
                <div className={"home-steps-singleStep"}>
                    <div className={this.props.iconClass}></div>
                    <p>{this.props.text1}</p>
                    <hr/>
                    <p>{this.props.text2}</p>
                </div>
            </>
        )
    }
}
export default HomeSteps;