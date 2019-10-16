import React from 'react';


class HomeThreeColumns extends React.Component {
    render() {

        return (
            <>
                <div className={"home-columns-container"}>
                    <SingleColumn number={10} description={"Oddanych worków"}/>
                    <SingleColumn number={5} description={"wspartych organizacji"}/>
                    <SingleColumn number={7} description={"zorganizowanych zbiórek"}/>
                </div>
            </>
        )
    }
}
class SingleColumn extends React.Component {
    render() {

        return (
            <>
                <div className={"home-single-column"}>
                    <p>{this.props.number}</p>
                    <p>{this.props.description}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto, cumque distinctio dolor ducimus eligendi fuga illum incidunt iste labore laborum.</p>
                </div>

            </>
        )
    }
}


export default HomeThreeColumns;