import React from 'react';
import fundationDatabase from "../assets/fundationTexts";
import organisationDatabase from "../assets/organisationDatabase";
import collectionDatabase from "../assets/collectionDatabase";



class HomeFoundations extends React.Component {
    constructor(){
        super();
        this.state = {
            slide: 1,
            data: fundationDatabase
        }
    }
    render() {

        return (
            <>
                <div className={"home-foundations-container"}>
                    <div className={"home-foundations-header"}>
                        <h1 className={"home-foundations-h1"}>Komu pomagamy?</h1>
                        <div className={"home-header-line"}></div>

                            <ul className={"home-foundations-nav"}>
                                <li onClick={()=>(
                                    this.setState({
                                        slide: 1,
                                        data: fundationDatabase
                                    })
                                )} className={this.state.slide===1 ? "active": null}>Fundacjom</li>
                                <li onClick={()=>(
                                    this.setState({
                                        slide: 2,
                                        data: organisationDatabase
                                    })
                                )} className={this.state.slide===2 ? "active": null}>Organizacjom pozarządowym</li>
                                <li onClick={()=>(
                                    this.setState({
                                        slide: 3,
                                        data: collectionDatabase
                                    })
                                )} className={this.state.slide===3 ? "active": null}>Lokalnym zbiórkom </li>
                            </ul>

                    </div>
                    {this.state.slide===1 ? <Description data={this.state.data}/> : null}
                    {this.state.slide===2 ? <Description data={this.state.data}/> : null}
                    {this.state.slide===3 ? <Description data={this.state.data}/> : null}
                </div>

            </>
        )
    }
}
class Description extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data.texts,
            page: 1,
            count: 0
        }
    }
    render() {

        return(
            <>
                <div className={"home-foundations-about-container"}>
                    <p className={"home-foundations-about"}>
                        {this.props.data.textAbout}
                    </p>
                </div>
                <div className={"home-foundations-pagination-area"}>
                    {this.state.data.slice(this.state.count,this.state.count+3).map((el,index)=>

                        (
                        <div key={index}>
                            <div className={"home-foundations-singleElem"}>
                                <div className={"left-side"}>
                                    <h2>{el.header}</h2>
                                    <p>{el.purpose}</p>
                                </div>
                                <p className={"right-side"}>{el.stuff}</p>

                            </div>
                            {(index + 1) % 3 ? <hr/> : null}
                        </div>
                        ))
                    }
                </div>
                <div className={"home-foundations-pagination"}>
                    {this.state.data.length > 3 ? <div className={"digits"}>
                        {this.state.data.map((el, index)=>(
                            !((index+1)%3) ? <div key={(index+1)/3}  onClick={()=>(
                                this.forceUpdate(),

                                this.setState({
                                    page: (index+1)/3,
                                    data: this.state.data,
                                    count: index-2
                                }),console.log("index",index)
                            )} className={(index+1)/3 === this.state.page ? "activeDigit" : null} >{(index+1)/3}</div> : null
                        ))}
                    </div> : null}
                </div>

            </>
        )
    }
}



export default HomeFoundations;