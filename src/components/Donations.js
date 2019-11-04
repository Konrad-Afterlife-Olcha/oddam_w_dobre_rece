import React from 'react';
import { store } from 'react-easy-state'
const donationInfo = store({
    step1: "ubrania w dobrym stanie",
    step1option: "option1",
    step2: "1",
    step3location: "",
    step3helpGroups: [],
    street: "",
    city: "",
    postCode: "",
    phoneNumber: "",
    date: "",
    time: "",
    note: ""
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
            step: 1
        }
    }
    render() {
        return(
            <>
                <div className={"steps-area"}>
                    {(this.state.step !== 5 && this.state.step !== 6) ? <div className={"steps-header"}>
                        {this.state.step === 1 ? <DonationsStepHeader text={"Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."}/> : null}
                        {this.state.step === 2 ? <DonationsStepHeader text={"Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ"}/> : null}
                        {this.state.step === 3 ? <DonationsStepHeader text={"Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy."}/> : null}
                        {this.state.step === 4 ? <DonationsStepHeader text={"Podaj adres oraz termin odbioru rzeczy."}/> : null }
                    </div> : null}
                    <div className={"step-area"}>
                        {this.state.step >= 4 ? null : <p className={"step-counter"}>Krok {this.state.step}/4</p>}
                        {this.state.step === 1 ? <StepOne/> : null}
                        {this.state.step === 2 ? <StepTwo/> : null}
                        {this.state.step === 3 ? <StepThree/> : null}
                        {this.state.step === 4 ? <StepFour/> : null}
                        {this.state.step === 5 ? <StepFive/> : null}
                        {this.state.step === 6 ? <Thanks/> : null}
                        <nav className={"steps-nav"}>
                            {(this.state.step !== 1 && this.state.step !== 6) ? <button onClick={()=>(this.setState({step: this.state.step-1}))} className={"step-button"}>Wstecz</button> : null}
                            {(this.state.step !== 5 && this.state.step !== 6) ? <button onClick={()=>(this.setState({step: this.state.step+1}))} className={"step-button"}>Dalej</button> : (this.state.step === 6 ? null : <button onClick={()=>(this.setState({step: this.state.step+1}))} className={"step-button"}>Potwierdzam</button>)}

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
                        <div>
                            <p className={"step-small-header"}>Adres odbioru</p>
                            <label>
                                <span>Ulica</span>
                                <input type="text" onChange={(e)=>{
                                    donationInfo.street = e.target.value
                                }} defaultValue={donationInfo.street}/>
                            </label>
                            <label>
                                <span>Miasto</span>
                                <input type="text" onChange={(e)=>{
                                    donationInfo.city = e.target.value
                                }} defaultValue={donationInfo.city}/>
                            </label>
                            <label>
                                <span>Kod pocztowy</span>
                                <input type="text" onChange={(e)=>{
                                    donationInfo.postCode = e.target.value
                                }} defaultValue={donationInfo.postCode}/>
                            </label>
                            <label>
                                <span>Numer telefonu</span>
                                <input type="text" onChange={(e)=>{
                                    donationInfo.phoneNumber = e.target.value
                                }} defaultValue={donationInfo.phoneNumber}/>
                            </label>
                        </div>
                        <div>
                            <p className={"step-small-header"}>Termin odbioru</p>
                            <label>
                                <span>Data</span>
                                <input type="date" onChange={(e)=>{
                                    donationInfo.date = e.target.value
                                }} defaultValue={donationInfo.date}/>
                            </label>
                            <label>
                                <span>Godzina</span>
                                <input type="time" onChange={(e)=>{
                                    donationInfo.time = e.target.value
                                }} defaultValue={donationInfo.time}/>
                            </label>
                            <label>
                                <span>Uwagi dla kuriera</span>
                                <textarea onChange={(e)=>{
                                    donationInfo.note = e.target.value
                                }} defaultValue={donationInfo.note}/>
                            </label>
                        </div>
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
                <div className={"step-details"}>
                    <p className={"step-header"}>Podsumowanie Twojej darowizny</p>
                    <div className={"donation-summary-part1"}>
                        <p className={"step-header"}>Oddajesz:</p>
                        <div>
                            <div className={"icon-clothes-summary"}></div>
                            <p>{donationInfo.step2} worki, {donationInfo.step1}, {donationInfo.step3helpGroups.map((el)=>(
                                el + ","
                            ))} </p>
                        </div>
                        <div>
                            <div className={"icon-round-summary"}></div>
                            <p>dla lokalizacji: {donationInfo.step3location}</p>
                        </div>
                    </div>
                    <div className={"donation-summary-part2"}>
                        <div className={"summary-part2"}>
                            <div className={"part2"}>
                                <p className={"step-small-header"}>Adres odbioru:</p>
                                <div className={"donation-summary-part2-details"}>
                                    <p>Ulica: </p>
                                    <p>{donationInfo.street}</p>
                                </div>
                                <div className={"donation-summary-part2-details"}>
                                    <p>Miasto: </p>
                                    <p>{donationInfo.city}</p>
                                </div>
                                <div className={"donation-summary-part2-details"}>
                                    <p>Kod pocztowy: </p>
                                    <p>{donationInfo.postCode}</p>
                                </div>
                                <div className={"donation-summary-part2-details"}>
                                    <p>Numer telefonu: </p>
                                    <p>{donationInfo.phoneNumber}</p>
                                </div>
                            </div>
                            <div className={"part2"}>
                                <p className={"step-small-header"}>Termin odbioru:</p>
                                <div className={"donation-summary-part2-details"}>
                                    <p>Data: </p>
                                    <p>{donationInfo.date}</p>
                                </div>
                                <div className={"donation-summary-part2-details"}>
                                    <p>Godzina: </p>
                                    <p>{donationInfo.time}</p>
                                </div>
                                <div className={"donation-summary-part2-details"}>
                                    <p>Uwagi dla kuriera: </p>
                                    <p>{donationInfo.note}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
class Thanks extends React.Component {
    render() {
        return (
            <>
                <div className={"thanks"}>
                    <div className={"thanks-area"}>
                        <p className={"thanks-text"}>Dziękujemy za przesłanie formularza <br/>
                        Na maila prześlemy wszelkie <br/>
                        informacje o odbiorze
                        </p>
                        <div className={"home-header-line"}></div>

                    </div>
                </div>
            </>
        );
    }
}
export default Donations