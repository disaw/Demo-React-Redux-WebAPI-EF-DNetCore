import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import {Provider} from "react-redux";
import FormList from './components/FormList';
import { Container } from "@material-ui/core";
import { ToastProvider } from "react-toast-notifications"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function App() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return (
    
    <Provider store={store}>
      <ToastProvider autoDismiss={true}>      
        <Container maxWidth="lg">

          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  XForms
                </Typography>
                <Button color="inherit"></Button>
              </Toolbar>
            </AppBar>
          </div>

          <FormList/>
        </Container>
      </ToastProvider>
    </Provider>
  );
}

export default App;
