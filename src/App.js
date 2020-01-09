import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";
import { Link, Events } from 'react-scroll';
import { slide as Menu } from 'react-burger-menu';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import Donations from "./components/Donations";
import HomeContact from "./components/HomeContact";

firebase.initializeApp(firebaseConfig)

// const settings = {timestampsInSnapshots: true};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      windowWidth: window.innerWidth,
      menuOpen: false
    }
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }
  closeMenu() {
    this.setState({ menuOpen: false })
  }
  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({
        windowWidth: window.innerWidth
      })
    })
    firebase.auth().onAuthStateChanged(user =>
      this.setState({
        isLoggedIn: !!user
      })
    )
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });


  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {


    return (
      <>
        <Router>
          {
            window.innerWidth <= 650 ? <Menu right className={"hamburger-menu"} width={"100%"} isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} >
              <Link className={"hamburger-menu__link"} to="homeAboutUs" spy={true} smooth={true} duration={1000} onClick={() => this.closeMenu()}>O nas</Link>
              <Link className={"hamburger-menu__link"} to="homeSteps" spy={true} smooth={true} duration={1000} onClick={() => this.closeMenu()}>O co chodzi?</Link>
              <Link className={"hamburger-menu__link"} to="homeFoundations" spy={true} smooth={true} duration={1000} onClick={() => this.closeMenu()}>Fundacja i organizacje</Link>
              <Link className={"hamburger-menu__link"} to="homeContact" spy={true} smooth={true} duration={1000} onClick={() => this.closeMenu()}>Kontakt</Link>
            </Menu> : null
          }
          <div className={"menu"}>
            <nav>
              {this.state.isLoggedIn ?
                <ul className={"menu__login"}>
                  <li className={"menu__element"}>
                    <p className={"menu__login--welcome"}>Cześć {firebase.auth().currentUser.email}</p>
                  </li>
                  <li className={"menu__element menu__button--active"}>
                    <NavLink className={"menu__login--link"} to="/oddaj-rzeczy">Oddaj rzeczy</NavLink>
                  </li>
                  <li className={"menu__element"}>
                    <NavLink className={"menu__login--link"} to="wylogowano">
                      <button className={"menu__logout"} onClick={() => {
                        firebase.auth().signOut();
                      }}>Wyloguj</button>
                    </NavLink>
                  </li>
                </ul> :
                <ul className={"menu__login"}>
                  <li className={"menu__element"}>
                    <NavLink className={"menu__login--link"} to="/logowanie">Zaloguj</NavLink>
                  </li>
                  <li className={"menu__button--active"}>
                    <NavLink className={"menu__login--link"} to="/rejestracja">Załóż konto</NavLink>
                  </li>
                </ul>}



            </nav>


            <nav className={"main-nav"}>
              <ul className={"main-menu"}>
                <li className="main-menu__element">
                  <NavLink className={"main-menu__link"} activeClassName={"main-menu__link--active"} exact to="/">Start</NavLink>
                </li>
                <li className="main-menu__element">
                  <Link className={"main-menu__link"} to="homeSteps" spy={true} smooth={true} duration={1000}>O co chodzi?</Link>
                </li>
                <li className="main-menu__element">
                  <Link className={"main-menu__link"} to="homeAboutUs" spy={true} smooth={true} duration={1000}>O nas</Link>
                </li>
                <li className="main-menu__element">
                  <Link className={"main-menu__link"} to="homeFoundations" spy={true} smooth={true} duration={1000}>Fundacja i organizacje</Link>
                </li>
                <li className="main-menu__element">
                  <Link className={"main-menu__link"} to="homeContact" spy={true} smooth={true} duration={1000}>Kontakt</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route path="/logowanie">
              <Login />
            </Route>
            <Route path="/rejestracja">
              <Register />
            </Route>
            <Route path="/wylogowano">
              <Logout />
            </Route>
            <Route path="/oddaj-rzeczy">
              <Donations />
              <HomeContact />
            </Route>
            <Route path="/">
              <Home />
            </Route>


          </Switch>

        </Router>


      </>
    );
  }
}

export default App;
