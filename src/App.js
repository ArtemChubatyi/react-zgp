import React, {Component} from 'react';
import preloader from './images/preloader.gif';
import './App.css';
import Video from './Video.js';
import Logo from './Logo.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  checkPageLoading = () => {
    window.onload = () => {
      this.setState({
        isLoaded: true
      })
    }
  }

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
          <div className="main-page">
            <Video />
          </div>
          <Logo />
        </div>
    );
  }
}

export default App;
