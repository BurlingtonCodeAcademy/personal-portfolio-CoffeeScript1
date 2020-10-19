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


function App() {

  return (

    <div className="App">
      <Router>
        <Navigation/>
        <Switch>
          <Route path='/about' render={() => <About />} />
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

export default App;





/// <work/>  is a component in JSX. when imported and put into JSX, it gets to line 9 and runs 
/// then it runs the FUNCTION. Will always be functions OR classes. Migh have a loop inside the 
// function. JS class constructor. (think of Zorkington, classes of objects), NOT the class 
///name of a div in html. 
//// components are self closing always. and alwats capitalized. 

/// 


