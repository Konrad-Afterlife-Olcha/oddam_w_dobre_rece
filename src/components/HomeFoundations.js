import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import fundationDatabase from "../assets/fundationTexts";




class HomeFoundations extends React.Component {
    constructor(){
        super();
        this.state = {
            slide: 1
        }
    }
    render() {

        return (
            <>
                <div className={"home-foundations-container"}>
                    <h1 className={"home-foundations-header"}>Komu pomagamy?</h1>
                    <div className={"home-header-line"}></div>
                    <nav>
                        <ul className={"home-foundations-nav"}>
                            <li onClick={()=>(
                                this.setState({
                                    slide: 1
                                })
                            )}>Fundacjom</li>
                            <li onClick={()=>(
                                this.setState({
                                    slide: 2
                                })
                            )}>Organizacjom pozarządowym</li>
                            <li onClick={()=>(
                                this.setState({
                                    slide: 3
                                })
                            )}>Lokalnym zbiórkom </li>
                        </ul>
                    </nav>
                    <Description slideNr={this.state.slide}/>
                </div>

            </>
        )
    }
}
class Description extends React.Component {
    render() {
        return(
            <>
                <div className={"home-foundations-about"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci neque nihil nobis quisquam vitae. A asperiores cupiditate dicta eligendi ex inventore ipsam itaque laboriosam natus, odio omnis pariatur unde veniam.</p>
                    {fundationDatabase.texts[1].header}
                </div>

            </>
        )
    }
}



export default HomeFoundations;