import React, {useState, useContext, useEffect} from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import './App.css';

import LandingPage from "./components/LandingPage.js";
import NewtonAgham from "./components/NewtonAgham.js";

const theme = createTheme({
  typography: {
    "fontFamily": `"Roboto", "Arial", Helvetica Neue`,
    h5: {
      fontFamily: `"Helvetica Neue"`,
    },
    body1: {
         fontFamily: `Helvetica 65 Medium`,
        },
  },
  // typography: {
  //   fontFamily: '`Helvetica 65 Medium`, "Roboto", "Arial", sans-serif',
  //   h1: {
  //    fontFamily: '`Helvetica Neue`',
  //   },
  // },
  palette: {
    secondary: {
      main: '#cccccc',
    },
    primary: {
      main: '#06808E',
      dark: 'green'
    },
  },
  overrides: {
    MuiDialog: {
      paper: {
        borderRadius: '12px',
        padding: 0,
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/newtonagham" component={NewtonAgham} />
          <Route exact path="/newtonagham/:id" component={NewtonAgham} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
