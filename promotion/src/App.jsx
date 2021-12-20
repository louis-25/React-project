import './App.css';
import Header from './components/Header'
import Visual from './components/Visual'
import Feature from './components/Feature'
import Promotion from './components/Promotion'
import About from './components/About/About'
import Brochure from './components/Brochure';
import Footer from './components/Footer'
import Terms from './components/Terms/Terms'
import Privacy from './components/Privacy/Privacy'
import Slider from './components/Slider/Slider';
import { useRef } from 'react'
import {ScrollContext} from './context/ScrollContext'
import { Route, Switch } from 'react-router-dom'

function App() {
  const featureRef = useRef()
  const promotionRef = useRef()
  const aboutRef = useRef()
  
  return (
    <div className="App">
      <Route exact path="/">
      <Header
        featureRef={featureRef}
        promotionRef={promotionRef}
        aboutRef={aboutRef}
      ></Header>
      <Visual promotionRef={promotionRef}></Visual>      
      <div ref={featureRef}><Feature></Feature></div>
      {/* <div ref={promotionRef}><Promotion></Promotion></div> */}
      <div ref={aboutRef}><About></About></div>
      <Brochure></Brochure>
      <Footer></Footer>
      </Route>
      <Route exact path="/terms">
        <Terms></Terms>
      </Route>
      <Route exact path="/privacy">
        <Privacy></Privacy>
      </Route>
      <Route exact path="/free-trial">        
        <Promotion></Promotion>
      </Route>
    </div>
  );
}

export default App;
