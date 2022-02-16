import { useState, useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import data from './data';

import logo from './images/logoY.jpg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const [activeSection, setActiveSection] = useState('React')
  const sections = data.sections;
  const plugins = data.plugins;
  const filteredPlugins = data.plugins.filter(plugin => plugin.section === activeSection);

  return (

  <Container>
        <Row>
    <Col xs={0} md={2} className='navigation'>
    <img src="./favicon.svg" alt=""/>
        <h1>Community Plugins</h1>
        <ul >
        {
            sections.map( section => <li className={ section === activeSection ? 'active' : '' } onClick={() => setActiveSection(section)}><a >{section}</a></li>)
        }
        </ul>

    </Col>
    <Col>
    <div>

    <div className='allCardsContainer'>
      {
        filteredPlugins.map(({ name, desc, section, git, npm }) =>     <div className="eachCard">
        <div className="cardContent">

            <div className="cardInfo">
                <h2 className="cardTitle">{name}</h2>
            <span className="cardSubTitle">{section}</span>
            <p className="cardText">{desc}</p>
            </div>
        </div>
        <div className="userActions">
            <button className="btn-secondary git-button"> Git</button>
            <button className="btn-primary npm-button">
               NPM DOCS
            </button>
        </div>
        </div>)
      }
      </div>
    </div>
    <ul className="footer">
            <li> &copy; {new Date().getFullYear()} Created by: <a href="https://www.mdbootstrap.com"> Greg J. Borrelly </a></li>
        </ul>

    </Col>
  </Row>
 


  
  </Container>

  )
}

export default App
