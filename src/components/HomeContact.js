import React from 'react';

const initialState = {
    name : "",
    email: "",
    message: "",
    invalidName: false,
    invalidEmail: false,
    invalidMessage: false
}

class HomeContact extends React.Component {
    constructor(){
        super();
        this.state = {
            name : "",
            email: "",
            message: "",
            invalidName: false,
            invalidEmail: false,
            invalidMessage: false,
            success: false
        }
    }
    nameValidation = ()=> {
        if(this.state.name.includes(" ") || this.state.name.length<2) {
            this.setState({
                invalidName: true
            })
            console.log("Podaj jedno poprawne imię")
            return false
        } else {return true}
    };
    emailValidation = () => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(this.state.email).toLowerCase())) {
            this.setState({
                invalidEmail: true
            })
            console.log("niepoprawny email")
            return false
        } else {return true}
    };
    messageValidation = () => {
        if(this.state.message.length <= 120) {
            this.setState({
                invalidMessage: true
            })
            console.log("Wiadomość za krótka")
            return false
        } else {return true}
    };
    sendForm = () => {
        console.log("wysyłka formularza");
        const message = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        }).then((res)=> {
            return res.json()
        }).then((data)=>{
            console.log('Wiadomość wysłana', data)
            this.setState(initialState);
            this.setState({
                success: true
            })
        }).catch((data)=>{
            console.log("Error", data)
        })
    }

    render() {

        return (
            <>
                <div className={"home-contact-container"}>
                    <div className={"home-contact-form-area"}>
                        <div className={"home-contact-form-container"}>
                            <div className={"home-contact-header"}>
                                <h1 className={"home-contact-h1"}>Skontaktuj się z nami</h1>
                                <div className={"home-header-line"}></div>
                                {this.state.success ? <div className={"home-form-success"}>Wiadomość została wysłana! <br/>Wkrótce się skontaktujemy.</div> : null}
                            </div>
                            <form action="" className={"home-contact-form"}>
                                <div className={"home-contact-nameAndEmailArea"}>
                                    <div><p>Wpisz swoje imię</p><input  style={{borderBottom: this.state.invalidName ? "1px solid red" : null}} onChange={(e)=>(
                                        this.setState({
                                            name: e.target.value
                                        })
                                    )} className={"home-contact-name-email"} type="text" placeholder={"Konrad"} name={"name"} value={this.state.name}/>
                                        {this.state.invalidName ? <p className={"invalid-input"}>Podane imię jest nieprawidłowe!</p> : null}
                                    </div>


                                    <div><p>Wpisz swój email</p><input  style={{borderBottom: this.state.invalidEmail ? "1px solid red" : null}} onChange={(e)=>(
                                        this.setState({
                                            email: e.target.value
                                        })
                                    )} className={"home-contact-name-email"} type="email" placeholder={"abc@xyz.pl"} name={"email"} value={this.state.email}/>
                                        {this.state.invalidEmail ? <p className={"invalid-input"}>Podany email jest nieprawidłowy!</p> : null}
                                    </div>
                                </div>
                                <div className={'home-contact-message'}><h2>Wpisz swoją wiadomość</h2><textarea style={{borderBottom: this.state.invalidMessage ? "1px solid red" : null}} onChange={(e)=>(
                                    this.setState({
                                        message: e.target.value
                                    })
                                )} placeholder={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolorum eius error, excepturi fugiat illum, ipsam laudantium modi, neque non pariatur rem sint voluptatem."} name={"message"} value={this.state.message} />
                                    {this.state.invalidMessage ? <p className={"invalid-input"}>Wiadomość musi mieć conajmniej 120 znaków!</p> : null}
                                </div>

                                <button onClick={(e)=>{
                                    e.preventDefault()
                                    this.nameValidation();
                                    this.emailValidation();
                                    this.messageValidation();
                                    if(this.nameValidation() && this.emailValidation() && this.messageValidation()) {

                                        this.sendForm()
                                    }

                                }} className={"home-contact-form-submit"} type={"submit"}>Wyślij</button>
                            </form>
                        </div>
                    </div>
                    <footer>
                        <p className={"home-footer"}>Copyright by Konrad Olcha</p>
                        <div className={"home-footer-socials"}>
                            <div className={"home-footer-fb"}></div>
                            <div className={"home-footer-insta"}></div>
                        </div>
                    </footer>
                </div>
            </>
        )
    }
}
export default HomeContact;