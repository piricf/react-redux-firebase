import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePageView from './views/HomePageView';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Navbar />
        <Route path="/" exact component={HomePageView} />
      </Switch>
    </Router>
  );
}

export default App;
