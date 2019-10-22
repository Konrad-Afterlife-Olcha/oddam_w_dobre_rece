import React from 'react';

class Donations extends React.Component {
    render() {

        return (
            <>
                <div className={"donations-container"}>
                    <div className={"donations-background"}></div>
                    <div className={"donations-main"}>
                        <p className={"donations-main-header"}>Oddaj rzeczy, których już nie chcesz <br/> POTRZEBUJĄCYM</p>
                        <div className={"home-header-line"}></div>
                        <p className={"donations-header-steps"}>Wystarczą 4 proste kroki:</p>
                        <div className={"donations-steps"}>
                            <RotatedSquare stepNumber={1} text={"Wybierz rzeczy"}/>
                            <RotatedSquare stepNumber={2} text={"Spakuj je w worki"}/>
                            <RotatedSquare stepNumber={3} text={"Wybierz fundację"}/>
                            <RotatedSquare stepNumber={4} text={"Zamów kuriera"}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
class RotatedSquare extends React.Component {
    render() {
        return (
            <>
                <div className={"donations-rotated-square"}>
                    <div>
                        <p className={"donations-rotated-square-number"}>{this.props.stepNumber}</p>
                        <p className={"donations-rotated-square-text"}>{this.props.text}</p>
                    </div>
                </div>
            </>
        );
    }
}
export default Donations