import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/scaffold/Header'
import Footer from './components/scaffold/Footer'
import About from './components/pages/About'
import Home from './components/pages/Home'
import Product from './components/pages/Product'
import Products from './components/pages/Products'

export default function App() {
  return (
    <div className="App relative pb-10 min-h-screen">
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
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/products/:id">
              <Product />
            </Route>
          </Switch>
        </div>
  
        <Footer />

      </Router>
    </div>
  )
}