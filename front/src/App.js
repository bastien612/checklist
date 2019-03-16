import React, { Component } from 'react';
import { Provider } from 'react-redux';
import 'App.css';
import rootReducer from 'reducers/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Routes from 'Routes';


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
          <Routes></Routes>
        </Provider>
      </React.Fragment>

      // <Route path="/greeting/:name" render={(props) => <Greeting text="Hello, " {...props} />} />

    );
  }
}

