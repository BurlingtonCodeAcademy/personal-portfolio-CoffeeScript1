//-----Imports 
import React from 'react';
import './App.css';
import Work from './Components/Work';
import About from './Components/About'
import Projects from './Components/Projects';
import Navigation from './Components/Navigation';
import Hobbies from './Components/Hobbies';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


//----- React routing functionality with path to all components 
function App() {

  return (

    <div className="App">
      <Router>
        <Navigation/>
        <Switch>
          <Route path='/about' render={() => <About />}/>
          <Route exact path="/" render={ ()=><About/>}/>
          <Route path='/projects' render={() => <Projects />} />
          <Route path='/hobbies' render={() => <Hobbies />} />
          <Route path='/work' render={() => <Work />} />
          <Route path='/contact' render={() => <Contact />} />
        </Switch>
      </Router>
      <Footer />
    </div>

  );
}

//------exporting component

export default App;



