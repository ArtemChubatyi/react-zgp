import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import preloader from './images/preloader.gif';
import './App.css';
import Background from './Background.jsx';
import Scene from './Scene.js';
import Interface from './Interface.js';
import MenuPage from './MenuPage.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoaded: false,
        isMenuOpened: false,
        menuPageClass: "menu-page"
    };
  }

  checkPageLoading = () => {
    window.onload = () => {
      setTimeout(()=>{
        this.setState({
          isLoaded: true
        })
      }, 1000)
    }
  };

  handleMenuOpen = () => {
      if(!this.state.isMenuOpened) {
          this.setState({
              menuPageClass: "menu-page opened",
              isMenuOpened: !this.state.isMenuOpened
          });
      } else {
          this.setState({
              menuPageClass: "menu-page hided",
              isMenuOpened: !this.state.isMenuOpened
          });
      }

  };

  componentDidMount() {

  }

  render () {
    let preloaderScreenClass = `preloader-screen`;
    if (this.state.isLoaded === true) {
      preloaderScreenClass = `preloader-screen loaded`
    }
    return (
        <div className="App">
          <div className={preloaderScreenClass}>
            <img src={preloader} alt="site preloader" className="preloader"/>
          </div>
          {this.checkPageLoading()}
          <Router>
          <div className="main-page">
            <Background />
          </div>
          <Scene isPageLoaded={this.state.isLoaded} />
          <Interface isPageLoaded={this.state.isLoaded} handleMenuOpen={this.handleMenuOpen}/>
          <MenuPage menuPageClass={this.state.menuPageClass} handleMenuOpen={this.handleMenuOpen} isMenuOpened={this.state.isMenuOpened}/>
          </Router>
        </div>
    );
  }
}

export default App;
