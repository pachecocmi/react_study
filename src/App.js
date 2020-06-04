import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/pages/About'
import Home from './components/pages/Home'
import Products from './components/pages/Products'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products/:id">
              <Products />
            </Route>
          </Switch>
        </div>
  
        <Footer />

      </Router>
    </div>
  )
}