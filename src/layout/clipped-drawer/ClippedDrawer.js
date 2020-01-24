import React from 'react';
import { NavLink, Route, Switch } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import HomeIcon from '@material-ui/icons/Home';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import ListIcon from '@material-ui/icons/List';
import PersonIcon from '@material-ui/icons/Person';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import TabIcon from '@material-ui/icons/Tab';

import NotFoundPage from "../../components/NotFoundPage";
import Welcome from '../../components/Welcome';
import AboutPage from "../../components/AboutPage";
import HomePage from "../../components/HomePage";
import Login from "../../components/auth/Login";
import DesertListing from "../../components/DesertListing";
import RequestListing from "../../components/RequestListing";
import TabsView from "../../components/TabsView";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

function ClippedDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <Typography variant="h6" noWrap>
                React Slingshot
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
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button key="Homepage" component={NavLink} to="/" exact>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home">Homepage</ListItemText>
        </ListItem>
        <ListItem button key="AboutPage" component={NavLink} to="/about">
            <ListItemIcon><FormatQuoteIcon /></ListItemIcon>
            <ListItemText primary="About" />
        </ListItem>
        <ListItem button key="DesertListing" component={NavLink} to="/listing">
            <ListItemIcon><ListIcon /></ListItemIcon>
            <ListItemText primary="Desert Listing" />
        </ListItem>
        <ListItem button key="RequestListing" component={NavLink} to="/request-listing">
            <ListItemIcon><GroupAddIcon /></ListItemIcon>
            <ListItemText primary="Request Listing" />
        </ListItem>
        <ListItem button key="TabsView" component={NavLink} to="/tabs-view">
            <ListItemIcon><TabIcon /></ListItemIcon>
            <ListItemText primary="Tabs View" />
        </ListItem>
        <ListItem button key="Login" component={NavLink} to="/login">
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary="Login" />
        </ListItem>
      </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/listing" component={DesertListing} />
            <Route path="/request-listing" component={RequestListing} />
            <Route path="/tabs-view" component={TabsView} />
            <Route path="/login" component={Login} />
            <Route component={NotFoundPage} />
          </Switch>
      </main>
    </div>
  );
}

export default ClippedDrawer;