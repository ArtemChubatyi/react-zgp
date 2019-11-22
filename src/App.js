import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import preloader from './images/preloader.gif';
import './App.css';
import Background from './Components/BackgroundComponent/Background.jsx';
import ContentContainer from './Containers/ContentContainer/ContentContainer.jsx';
import Interface from './Components/InterfaceComponent/Interface.js';
import MenuPage from './Containers/MenuPage/MenuPage.js'
import About from "./Containers/About/About";


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
      this.setState({
          isMenuOpened: !this.state.isMenuOpened
      });
  };

  componentDidMount() {

  }

  render () {
      const {isLoaded, isMenuOpened} = this.state;

      return (
          <div className="App">
            <div className={`preloader-screen${isLoaded ? ' hidden' : ''}`}>
              <img src={preloader} alt="site preloader" className="preloader-logo"/>
            </div>
            {this.checkPageLoading()}
            <Router>
              <ContentContainer isPageLoaded={this.state.isLoaded} />
              <div className="main-page">
                  <Background />
              </div>
                {isLoaded && <Interface handleMenuOpen={this.handleMenuOpen}/>}
              <MenuPage menuPageClass={`menu-page${isMenuOpened ? ' visible' : ' hidden'}`} handleMenuOpen={this.handleMenuOpen} isMenuOpened={this.state.isMenuOpened}/>
            </Router>
          </div>
      );
    }
}

export default App;
