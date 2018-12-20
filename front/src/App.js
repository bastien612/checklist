import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ConfigPage from './pages/ConfigPage/ConfigPage';
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
            </React.Fragment>
          </Router>
      </React.Fragment>

      // <Route path="/greeting/:name" render={(props) => <Greeting text="Hello, " {...props} />} />

    );
  }
}

