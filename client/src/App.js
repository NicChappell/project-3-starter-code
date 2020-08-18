// dependencies
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// page components
import Blog from './pages/Blog'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import PortfolioDetail from './pages/PortfolioDetail'
import NotFound from './pages/NotFound'

// components
import Footer from './components/Footer'
import Navbar from './components/Navbar'

// styles
import './css/styles.css'

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div id="router-content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/portfolio/:slug">
              <PortfolioDetail />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
