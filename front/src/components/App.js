import React, { Component } from 'react';
import './App.css';
import Header from './Layouts/Header';
import HomePage from './HomePage/HomePage';
import Footer from './Layouts/Footer';


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

    // if (this.state.visible) {
    //   text=<Typography id="chouette" style={{ marginTop:"50px" }} variant="h1">Chouette</Typography>;
    // } else {
    //   text=null;
    // }

    return (
      <React.Fragment>
          <Header />
          <HomePage />
          <Footer />
      </React.Fragment>
    );
  }
}

