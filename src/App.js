import React from 'react';
import SignUpContainer from "./components/SignUpContainer"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import './App.css'

const App = () => (
  <MuiThemeProvider>
    <SignUpContainer />
  </MuiThemeProvider>
);

export default App;


