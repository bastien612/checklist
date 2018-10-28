import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Layouts/Header';
import HomePage from './HomePage/HomePage';
import Footer from './Layouts/Footer';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Panels from './Exercices/index';


export default class App extends Component {

  constructor(props){
    super(props);

    this.hideChouette = this.hideChouette.bind(this);

    this.state = {visible: true};
  }

  hideChouette() {

    this.setState({visible: !this.state.visible});
  }

  render() {
    let text;

    if (this.state.visible) {
      text=<Typography id="chouette" style={{ marginTop:"50px" }} variant="h1">Chouette</Typography>;
    } else {
      text=null;
    }

    return (
      <React.Fragment>
          <Header />
          <div >
            
            {text}
            <Panels />
          </div>
          <Footer />
      </React.Fragment>
    );
  }
}

