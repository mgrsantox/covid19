import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

import CardDetail from './components/info/CardDetail';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:slug" component={CardDetail} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
