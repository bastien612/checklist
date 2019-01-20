import React, { Component } from 'react';
import configureStore from 'store/configureStore';
import './App.css';
import HomePage from './pages/user/HomePage/HomePage';
import ConfigPage from './pages/user/ConfigPage/ConfigPage';
import CategoryPage from './pages/user/CategoryPage/CategoryPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const store = configureStore();

export default class App extends Component {

  constructor(props) {
    super(props);

    this.hideChouette = this.hideChouette.bind(this);

    this.state = { visible: true };
  }

  hideChouette() {

    this.setState({ visible: !this.state.visible });
  }

  render() {

    return (
      <React.Fragment>
        <Provider store={store}>
          <Router>
            <React.Fragment>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/home" component={HomePage} />
              <Route path="/config" component={ConfigPage} />
              <Route path="/Category" component={CategoryPage} />
            </React.Fragment>
          </Router>
        </Provider>
      </React.Fragment>

      // <Route path="/greeting/:name" render={(props) => <Greeting text="Hello, " {...props} />} />

    );
  }
}

