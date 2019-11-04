import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";
import {Link , Events} from 'react-scroll'
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
      isLoggedIn: false
    }
  }
  componentDidMount() {
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
            <div className={"menu"}>
              <nav>
                {this.state.isLoggedIn ?
                <ul className={"menu-login"}>
                  <li>
                    <p>Cześć {firebase.auth().currentUser.email}</p>
                  </li>
                  <li className={"menu-active-button"}>
                    <NavLink to="/oddaj-rzeczy">Oddaj rzeczy</NavLink>
                  </li>
                  <li>
                    <NavLink to="wylogowano">
                    <button className={"menu-logout"} onClick={()=> {
                      firebase.auth().signOut();
                    }}>Wyloguj</button>
                    </NavLink>
                  </li>
                </ul> :
                  <ul className={"menu-login"}>
                      <li>
                        <NavLink to="/logowanie">Zaloguj</NavLink>
                      </li>
                      <li className={"menu-active-button"}>
                      <NavLink to="/rejestracja">Załóż konto</NavLink>
                    </li>
                  </ul>}



              </nav>
              <nav>
                <ul className={"main-menu"}>
                  <li>
                    <NavLink activeClassName={"active-menu"} exact to="/">Start</NavLink>
                  </li>
                  <li>
                    <Link to="homeSteps" spy={true} smooth={true} duration={1000}>O co chodzi?</Link>
                  </li>
                  <li>
                    <Link to="homeAboutUs" spy={true} smooth={true} duration={1000}>O nas</Link>
                  </li>
                  <li>
                    <Link to="homeFoundations" spy={true} smooth={true} duration={1000}>Fundacja i organizacje</Link>
                  </li>
                  <li>
                    <Link to="homeContact" spy={true} smooth={true} duration={1000}>Kontakt</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <Switch>
                <Route path="/logowanie">
                        <Login/>
                </Route>
                <Route path="/rejestracja">
                        <Register/>
                </Route>
                <Route path="/wylogowano">
                            <Logout/>
                </Route>
              <Route path="/oddaj-rzeczy">
                <Donations/>
                <HomeContact/>
              </Route>
                <Route path="/">
                        <Home/>
                </Route>


                </Switch>

          </Router>


                  </>
    );
  }
}

export default App;
