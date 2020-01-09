import React from 'react';


class HomeThreeColumns extends React.Component {
    render() {

        return (
            <>
                <div className={"three-columns__container"}>
                    <SingleColumn number={10} description={"Oddanych worków"} />
                    <SingleColumn number={5} description={"wspartych organizacji"} />
                    <SingleColumn number={7} description={"zorganizowanych zbiórek"} />
                </div>
            </>
        )
    }
}
class SingleColumn extends React.Component {
    render() {

        return (
            <>
                <div className={"three-columns__column"}>
                    <h2 className={"three-columns__number"}>{this.props.number}</h2>
                    <h3 className={"three-columns__title"}>{this.props.description}</h3>
                    <p className={"three-columns__text"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto, cumque distinctio dolor ducimus eligendi fuga illum incidunt iste labore laborum.</p>
                </div>

            </>
        )
    }
}


export default HomeThreeColumns;