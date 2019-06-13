import React, { Component } from 'react';
// import './App.css';
// Imported components
import About from './components/About';
import Header from './components/Header';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import PortfoDesc from './components/PortfoDesc';
import PortfoScreen from './components/PortfoScreen';
import Skill from './components/Skill';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  // Render the components and JSX
  render() {
    return (
      <div className="all">
        <Nav />
        <div id="skills">
          <Skill skill="HTML" />
          <Skill skill="CSS" />
          <Skill skill="Sass" />
          <Skill skill="BootStrap" />
          <Skill skill="JavaScrip" />
          <Skill skill="jQuery" />
          <Skill skill="Node.js" /> 
          <Skill skill="Express" />
          <Skill skill="React" /> 
          <Skill skill="MySQL" />
          <Skill skill="MongoDB" />
          <Skill skill="GIT" />
        </div>
        <div id="portfolio">

        </div>
        <div id="about">

        </div>
      </div>
    );
  }
}

export default App;