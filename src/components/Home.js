import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSteps from "./HomeSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeFoundations from "./HomeFoundations";
import HomeContact from "./HomeContact";
import {Element} from 'react-scroll'


class Home extends React.Component {
    render() {

        return (
            <>
                    <HomeHeader/>
                    <Element name="homeThreeColumns"><HomeThreeColumns/></Element>
                    <Element name="homeSteps"><HomeSteps/></Element>
                    <Element name="homeAboutUs"><HomeAboutUs/></Element>
                    <Element name="homeFoundations"><HomeFoundations/></Element>
                    <Element name="homeContact"><HomeContact/></Element>
                    </>

    )
    }
}
export default Home;