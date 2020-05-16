import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from "./src/Routes";
//import Provider from 'react-redux';
//import { createStore } from 'redux';
//import reducer from 'reducer';

//const store = createStore(reducer)

function App() {

  return (
    //<Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    //</Provider>
  );
}

export default App;