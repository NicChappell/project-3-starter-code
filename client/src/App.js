// dependencies
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// page components
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import PortfolioDetail from './pages/PortfolioDetail'
import NotFound from './pages/NotFound'

// components
import Footer from './components/Footer'
import Navbar from './components/Navbar'

// data
import config from './data/config.json'

// styles
import './css/styles.css'

function App() {
  // state hook variables
  const [profile, setProfile] = useState({})

  // set profile after component mounts
  useEffect(() => setProfile(config), [])

  // set title when profile changes
  useEffect(() => document.title = profile.fullName, [profile])

  return (
    <Router>
      <div className="container">
        <Navbar profile={profile} />
        <div id="router-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
        <Footer profile={profile} />
      </div>
    </Router>
  );
}

export default App;
