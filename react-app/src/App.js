import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import {Provider} from "react-redux";
import FormList from './components/FormList';

function App() {
  return (
    <Provider store={store}>
      <FormList/>
    </Provider>
  );
}

export default App;
