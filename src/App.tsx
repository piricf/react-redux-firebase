import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePageView from './views/HomePageView';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePageView} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
