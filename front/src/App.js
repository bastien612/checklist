import React, { Component } from 'react';
import './App.css';
import Header from './components/Layouts/Header';
import HomePage from './pages/HomePage/HomePage';
import Layout from './components/Layouts/Layout';
import ConfigPage from './pages/ConfigPage/ConfigPage';
import Footer from './components/Layouts/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';


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
          <Router>
            <React.Fragment>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/home" component={HomePage}/>
              <Route path="/config" component={ConfigPage}/>
              <Route path="/layout" render={(props) => <Layout {...props} page={ConfigPage} title="titre!"/>}/>
            </React.Fragment>
          </Router>
        
          
      </React.Fragment>

      // <Route path="/greeting/:name" render={(props) => <Greeting text="Hello, " {...props} />} />

    );
  }
}

