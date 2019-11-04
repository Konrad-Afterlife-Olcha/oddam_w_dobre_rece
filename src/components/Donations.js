import React from 'react';
import { store } from 'react-easy-state'
const donationInfo = store({
    step1: "ubrania w dobrym stanie",
    step1option: "option1",
    step2: "1",
    step3location: "",
    step3helpGroups: []
});

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
            step: 4
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
                    <div className={"step-area"}>
                        {this.state.step === 5 ? null : <p className={"step-counter"}>Krok {this.state.step}/4</p>}
                        {this.state.step === 1 ? <StepOne/> : null}
                        {this.state.step === 2 ? <StepTwo/> : null}
                        {this.state.step === 3 ? <StepThree/> : null}
                        {this.state.step === 4 ? <StepFour/> : null}
                        {this.state.step === 5 ? <StepFive/> : null}
                        <nav className={"steps-nav"}>
                            {this.state.step !== 1 ? <button onClick={()=>(this.setState({step: this.state.step-1}))} className={"step-button"}>Wstecz</button> : null}
                            {this.state.step !== 5 ? <button onClick={()=>(this.setState({step: this.state.step+1}))} className={"step-button"}>Dalej</button> : <button className={"step-button"}>Potwierdzam</button>}
                        </nav>
                    </div>

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
class StepOne extends React.Component {
    constructor(){
        super();
        this.state = {
            selectedOption: donationInfo.step1option
        }
    }
    handleOptionChange = event => {
        this.setState({
            selectedOption: event.target.value
        });
        donationInfo.step1option = event.target.value;
        donationInfo.step1 = event.target.name;
    }
    render() {
        return(
            <>
                <div className={"step-details"}>
                    <p className={"step-header"}>Zaznacz co chcesz oddać:</p>
                    <form>
                        <input
                            className={"radio1"}
                            type="radio"
                            value={"option1"}
                            checked={this.state.selectedOption === "option1"}
                            onChange={this.handleOptionChange}
                            name={"ubrania w dobrym stanie"}
                        />
                        <span className={"radioText"}>ubrania, które nadają się do ponownego użycia</span>
                        <br/>
                        <input
                            className={"radio1"}
                            type="radio"
                            value={"option2"}
                            checked={this.state.selectedOption === "option2"}
                            onChange={this.handleOptionChange}
                            name={"ubrania do wyrzucenia"}
                        />
                        <span className={"radioText"}>ubrania, do wyrzucenia</span>
                        <br/>
                        <input
                            className={"radio1"}
                            type="radio"
                            value={"option3"}
                            checked={this.state.selectedOption === "option3"}
                            onChange={this.handleOptionChange}
                            name={"zabawki"}
                        />
                        <span className={"radioText"}>zabawki</span>
                        <br/>
                        <input
                            className={"radio1"}
                            type="radio"
                            value={"option4"}
                            checked={this.state.selectedOption === "option4"}
                            onChange={this.handleOptionChange}
                            name={"książki"}
                        />
                        <span className={"radioText"}>książki</span>
                        <br/>
                        <input
                            className={"radio1"}
                            type="radio"
                            value={"option5"}
                            checked={this.state.selectedOption === "option5"}
                            onChange={this.handleOptionChange}
                            name={"inne"}
                        />
                        <span className={"radioText"}>inne</span>

                    </form>
                </div>
                </>
        )
    }
}
class StepTwo extends React.Component {
    render() {
        return(
            <>
                <div className={"step-details"}>
                    <p className={"step-header"}>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</p>
                    <form>
                        <span>Liczba 60l worków: </span>
                        <select name="bags" id="bags" onChange={(e)=>(donationInfo.step2 = e.target.value)}>
                            <option value="" disabled defaultValue>---wybierz---</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>

                        </select>
                    </form>
                </div>
            </>
        )
    }
}
class StepThree extends React.Component {
    constructor(){
        super();
        this.state = {
            optionsSelected: donationInfo.step3helpGroups,
            localizationSpecific: "",
            locationSelectDisabled: false
        }
    }
    handleHelpGroupChange = event =>{
        if(!this.state.optionsSelected.includes(event.target.value)){
            this.setState({
                optionsSelected: [...this.state.optionsSelected , event.target.value]
            });
            donationInfo.step3helpGroups.push(event.target.value)
        } else {
            this.setState({
                optionsSelected: this.state.optionsSelected.filter((el)=>{
                    return el !==event.target.value
                })
            })

            donationInfo.step3helpGroups = donationInfo.step3helpGroups.filter((el)=>{
                return el !== event.target.value
            })
        }

    }
    render() {
        return(
            <>
                <div className={"step-details"}>
                    <form>
                        <p className={"step-header"}>Lokalizacja:</p>
                        <select className={"select-location"} name="location" id="location" onChange={(e)=>(donationInfo.step3location = e.target.value)} disabled={this.state.locationSelectDisabled}>
                            <option defaultValue>---wybierz---</option>
                            <option value="Poznań">Poznań</option>
                            <option value="Warszawa">Warszawa</option>
                            <option value="Kraków">Kraków</option>
                            <option value="Wrocław">Wrocław</option>
                            <option value="Katowice">Katowice</option>
                        </select>
                        <p className={"step-small-header"}>Komu chcesz pomóc?</p>
                        <input
                            type="checkbox"
                            value={"dzieciom"}
                            onChange={this.handleHelpGroupChange}
                            checked={this.state.optionsSelected.includes("dzieciom")}
                        />dzieciom
                        <input
                            type="checkbox"
                            value={"samotnym matkom"}
                            onChange={this.handleHelpGroupChange}
                            checked={this.state.optionsSelected.includes("samotnym matkom")}
                        />samotnym matkom
                        <input
                            type="checkbox"
                            value={"bezdomnym"}
                            onChange={this.handleHelpGroupChange}
                            checked={this.state.optionsSelected.includes("bezdomnym")}
                        />bezdomnym
                        <input
                            type="checkbox"
                            value={"niepełnosprawnym"}
                            onChange={this.handleHelpGroupChange}
                            checked={this.state.optionsSelected.includes("niepełnosprawnym")}
                        />niepełnosprawnym
                        <input
                            type="checkbox"
                            value={"osobom starszym"}
                            onChange={this.handleHelpGroupChange}
                            checked={this.state.optionsSelected.includes("osobom starszym")}
                        />osobom starszym
                        <p className={"step-small-header"}>Wpisz nazwę konkretnej lokalizacji(opcjonalnie)</p>
                        <input
                            type="text"
                            value={donationInfo.step3location}
                            onChange={(e)=>{
                                this.setState({
                                    localizationSpecific: e.target.value,
                                    locationSelectDisabled: e.target.value !== ""
                                });
                                donationInfo.step3location = e.target.value
                            }}
                        />
                    </form>
                </div>
            </>
        )
    }
}
class StepFour extends React.Component {
    render() {
        return(
            <>
                <div className={"step-details"}>
                   <p className={"step-header"}>Podaj adres oraz termin odbioru rzeczy przez kuriera</p>
                    <form className={"address-form"}>
                        <div className={"address-info"}></div>
                        <div className={"data-info"}></div>
                    </form>
                </div>
            </>
        )
    }
}
class StepFive extends React.Component {
    render() {
        return(
            <>
                <div className={"step-details"}></div>
            </>
        )
    }
}
export default Donations