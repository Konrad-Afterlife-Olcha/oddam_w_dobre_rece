import React from 'react';
import { store } from 'react-easy-state'
const donationInfo = store({});

class Donations extends React.Component {
    render() {

        return (
            <>
                <div className={"donations-container"}>
                    <div className={"donations-header-container"}>
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
                    <DonationsStepArea/>
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
class DonationsStepArea extends React.Component {
    constructor(){
        super();
        this.state = {
            step: 1
        }
    }
    render() {
        return(
            <>
                <div className={"steps-area"}>
                    {this.state.step !== 5 ? <div className={"steps-header"}>
                        {this.state.step === 1 ? <DonationsStepHeader text={"Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."}/> : null}
                        {this.state.step === 2 ? <DonationsStepHeader text={"Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ"}/> : null}
                        {this.state.step === 3 ? <DonationsStepHeader text={"Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy."}/> : null}
                        {this.state.step === 4 ? <DonationsStepHeader text={"Podaj adres oraz termin odbioru rzeczy."}/> : null }
                    </div> : null}
                    <p className={"step-counter"}>{this.state.step}/4</p>
                    <nav>
                        {this.state.step !== 1 ? <button onClick={()=>(this.setState({step: this.state.step-1}))} className={"step-button"}>Wstecz</button> : null}
                        {this.state.step !== 5 ? <button onClick={()=>(this.setState({step: this.state.step+1}))} className={"step-button"}>Dalej</button> : <button className={"step-button"}>Potwierdzam</button>}
                    </nav>
                </div>


            </>
        )
    }
}
class DonationsStepHeader extends React.Component {
    render() {
        return(
            <>
                <h1 className={"step-h1"}>Ważne!</h1>
                <p>{this.props.text}</p>
            </>
        )
    }
}
export default Donations