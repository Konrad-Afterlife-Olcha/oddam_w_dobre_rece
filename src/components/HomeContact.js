import React from 'react';


class HomeContact extends React.Component {
    render() {

        return (
            <>
                <div className={"home-contact-container"}>
                    <div className={"home-contact-form-area"}>
                        <h1 className={"home-contact-header"}>Skontaktuj się z nami</h1>
                        <div className={"home-header-line"}></div>
                        <form action="" className={"home-contact-form"}>
                            <div>
                                <input type="text" placeholder={"Konrad"} name={"name"}/>
                                <input type="email" placeholder={"abc@xyz.pl"} name={"email"}/>
                            </div>
                            <textarea placeholder={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias esse est expedita omnis quidem!"} name={"message"}></textarea>
                        </form>
                    </div>
                    <footer>
                        <p className={"home-footer"}>Copyright by Konrad Olcha</p>
                        <div>
                            <div className={"home-footer-fb"}></div>
                            <div className={"home-footer-snap"}></div>
                        </div>
                    </footer>
                </div>
            </>
        )
    }
}
export default HomeContact;