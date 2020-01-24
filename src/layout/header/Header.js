import React from 'react'
import { NavLink, Route, Switch } from "react-router-dom";

import NotFoundPage from "../../components/NotFoundPage";
import Welcome from '../../components/Welcome';
import AboutPage from "../../components/AboutPage";
import HomePage from "../../components/HomePage";
import Login from "../../components/auth/Login";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

const Header = () => {
    return(
        <div>
        <div>
          <AppBar position="static">
            <Toolbar>
              <Grid container spacing={3}>
                <Grid item xs={2}>
                  <Typography color="inherit">
                    <NavLink className="link" exact to="/">React Slingshot</NavLink>
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Button color="inherit">
                    <NavLink className="link" exact to="/">Home</NavLink>
                  </Button>
                  <Button color="inherit">
                    <NavLink className="link" to="/about">About</NavLink>
                  </Button>
                  <Button color="inherit">
                    <NavLink className="link" to="/login">Login</NavLink>
                  </Button>
                </Grid>
                <Grid item xs={1}>
                <Chip
                    avatar={<Avatar>A</Avatar>}
                    label= {<Welcome user="Awais" />}
                    clickable
                    color="primary"
                  />
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </div>

        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/login" component={Login} />
            <Route component={NotFoundPage} />
          </Switch>
        </Container>
      </div>
    )
}

export default Header;