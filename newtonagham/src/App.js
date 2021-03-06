import React from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './App.css';

import LandingPage from "./components/LandingPage.js";

const theme = createTheme({
  typography: {
    "fontFamily": `"Roboto", "Arial", Helvetica Neue`,
    h2: {
      fontFamily: `"Helvetica Neue"`,
    },
    h4: {
      fontFamily: `"Helvetica Neue"`,
    },
    h5: {
      fontFamily: `"Helvetica Neue"`,
    },
    h6: {
      fontFamily: `"Helvetica Neue"`,
    },
    // body1: {
    //      fontFamily: `Helvetica 65 Medium`,
    //     },
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
      main: '#266ebc',
      dark: '#06808E'
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
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
