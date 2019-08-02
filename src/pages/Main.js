import React, { Component } from 'react';
import './main.css';
// Imported components
import About from '../components/About';
import Header from '../components/Header';
import Nav from '../components/Nav';
import PortfoDesc from '../components/PortfoDesc';
import PortfoScreen from '../components/PortfoScreen';
import SiteMap from '../components/SiteMap';
import Skill from '../components/Skill';
// Imported images
import arthistory from '../images/mainpage/arthistory.jpg';
import northernlights from '../images/mainpage/northernlights.jpg';
import restaurants from '../images/mainpage/restaurants.jpg';
import modernart from '../images/mainpage/modernart.jpg';
import v from '../images/mainpage/v1.jpg';
import me from '../images/mainpage/headshotMackinac.jpg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  // Render the components and JSX
  render() {
    return (
      <div className="all">
        <div className="wide-nav">
        <Nav />
        </div>
        {/*  ------Header section------ */}
        <div className="container">
          <Header
            src={v}
          />

          {/*  ------Skills section------ */}
          <span id="skills"></span>
          <div className="skills">
            <Skill skill="HTML" id="first-skill" />
            <Skill skill="CSS" />
            <Skill skill="Sass" />
            <Skill skill="BootStrap" />
            <Skill skill="JavaScript" />
            <Skill skill="React" />
            {/* <Skill skill="jQuery" /> */}
            <Skill skill="Node.js" /> 
            <Skill skill="Express" /> 
            <Skill skill="REST API" />
            <Skill skill="MySQL" />
            <Skill skill="MongoDB" />
            <Skill skill="Git" id="last-skill" />
          </div>

          {/* ------Portfolio section------ */}
          <span id="portfolio"></span>
          <div className="portfolio" >
            {/* ------Find Your Lights------ */}
            <a href="/lights" className="port-row">
              <PortfoScreen
                  src={northernlights}
                  alt="Screenshot of Find Your Lights"
              />
              <PortfoDesc 
                  title="Find Your Lights"
                  description="Application allows user to find when Northern Lights will be visible"
              />
            </a>
            {/* ------Lets Eat------ */}
            <a href="/letseat" className="port-row sm-row-even">
              <PortfoScreen
                  className="portScreen2"
                  src={restaurants}
                  alt="Screenshot of Lets Eat"
              />
              <PortfoDesc 
                  className="portDesc2"
                  title="Let's Eat"
                  description="User generated list tracks restaurants to try and record the ones worth returning to"
              />
            </a>
            <a href="/letseat" className="port-row md-row-even">
              <PortfoDesc 
                  className="portDesc2"
                  title="Let's Eat"
                  description="User generated list tracks restaurants to try and record the ones worth returning to"
              />
              <PortfoScreen
                  className="portScreen2"
                  src={restaurants}
                  alt="Screenshot of Lets Eat"
              />
            </a>
            {/* ------Memory------ */}
            <a href="/memory" className="port-row">
              <PortfoScreen
                  className="portScreen1"
                  src={arthistory}
                  alt="Screenshot of art memory game"
              />
              <PortfoDesc 
                  className="portDesc1"
                  title="Art History Memory Game"
                  description="Memory game using works of art from different cultures and eras"
              />
            </a>
            {/* ------Art Generator------ */}
            <a href="/artgenerator" className="port-row sm-row-even">
              <PortfoScreen
                  className="portScreen2"
                  src={modernart}
                  alt="Screenshot of Modern Art Generator"
              />
              <PortfoDesc 
                  className="portDesc2"
                  title="Modern Art Generator"
                  description="Each load will create a piece of modern art randomly generated with JavaScript"
              />
            </a>
            <a href="/artgenerator" className="port-row md-row-even">
              <PortfoDesc 
                  className="portDesc2"
                  title="Modern Art Generator"
                  description="Each load will create a piece of modern art randomly generated with JavaScript"
              />
              <PortfoScreen
                  className="portScreen2"
                  src={modernart}
                  alt="Screenshot of Modern Art Generator"
              />
            </a>
          </div>

          {/* ------About me section------ */}
          <span id="about"></span>
          <About src={me} />
          
        </div>
        <SiteMap />
      </div>
    );
  }
}

export default App;