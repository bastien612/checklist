import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import HomePage from './pages/user/HomePage/HomePage';
import ConfigPage from './pages/user/ConfigPage/ConfigPage';
import CategoryPage from './pages/user/CategoryPage/CategoryPage';
import CreateCategoryPage from './pages/user/CreateCategoryPage/CreateCategoryPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import rootReducer from 'reducers/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(
    thunkMiddleware
  )));

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
              <Route path="/category" component={CategoryPage} />
              <Route path="/createCategory" component={CreateCategoryPage} />
            </React.Fragment>
          </Router>
        </Provider>
      </React.Fragment>

      // <Route path="/greeting/:name" render={(props) => <Greeting text="Hello, " {...props} />} />

    );
  }
}

