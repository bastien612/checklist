import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Layouts/Header';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Layouts/Footer';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Header />
          <div style={{ marginTop:"100px" }}>Pouet</div>
          <Footer />
      </React.Fragment>
    );
  }
}

