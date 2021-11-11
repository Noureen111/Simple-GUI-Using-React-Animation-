import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/services" component={Service} />
      {/* <Redirect to="/" /> */}
      </Router>
      
    </div>
  );
}

export default App;
