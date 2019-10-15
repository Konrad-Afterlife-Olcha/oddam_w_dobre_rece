import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSteps from "./HomeSteps";


class Home extends React.Component {
    render() {

        return (
            <>
                <HomeHeader/>
                <HomeThreeColumns/>
                <HomeSteps/>
            </>
    )
    }
}
export default Home;