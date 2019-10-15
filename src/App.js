import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import * as Scroll from 'react-scroll';
import {Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
        scroller.scrollTo('scroll-container-second-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          containerId: 'scroll-container'
        }));
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
                <ul className={"menu-login"}>
                  <li>
                    <NavLink to="/logowanie">Zaloguj</NavLink>
                  </li>
                  <li>
                    <NavLink to="/rejestracja">Załóż konto</NavLink>
                  </li>
                </ul>
              </nav>
              <nav>
                <ul className={"main-menu"}>
                  <li>
                    <Link to="/">Start</Link>
                  </li>
                  <li>
                    <Link to="homeThreeColumns" spy={true} smooth={true} duration={500}>O co chodzi?</Link>
                  </li>
                  <li>
                    <Link to="homeAboutUs" spy={true} smooth={true} duration={500}>O nas</Link>
                  </li>
                  <li>
                    <Link to="homeFoundations" spy={true} smooth={true} duration={500}>Fundacja i organizacje</Link>
                  </li>
                  <li>
                    <Link to="homeContact" spy={true} smooth={true} duration={500}>Kontakt</Link>
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
