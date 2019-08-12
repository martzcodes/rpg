import React from "react";
import "./App.css";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MadeWithLove from "./components/MadeWithLove";
import Dnd from "./dnd/Dnd";
import Settings from "./settings/Settings";
import Expanse from "./expanse/Expanse";
import GavelIcon from "@material-ui/icons/Gavel";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import SettingsIcon from "@material-ui/icons/Settings";
import {
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  MenuList,
  MenuItem,
  Drawer
} from "@material-ui/core";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(
  theme =>
    ({
      root: {
        display: "flex"
      },
      toolbar: {
        paddingRight: 24 // keep right padding when drawer closed
      },
      toolbarIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        })
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      },
      menuButton: {
        marginRight: 36
      },
      menuButtonHidden: {
        display: "none"
      },
      title: {
        flexGrow: 1
      },
      drawerPaper: {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      },
      drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9)
        }
      },
      appBarSpacer: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto"
      },
      container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
      },
      paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column"
      },
      fixedHeight: {
        height: 240
      }
    } as any)
);

const App = () => {
  const classes: any = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router basename="/rpg">
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              RPG Discord Tools
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <MenuList>
            <Link to="/" style={{ textDecoration: "none" }} key="expanse">
              <MenuItem>
                <ListItemIcon>
                  <Brightness5Icon />
                </ListItemIcon>
                <ListItemText primary="Expanse" />
              </MenuItem>
            </Link>
            <Link to="/dnd" style={{ textDecoration: "none" }} key="dnd">
              <MenuItem>
                <ListItemIcon>
                  <GavelIcon />
                </ListItemIcon>
                <ListItemText primary="DND" />
              </MenuItem>
            </Link>
            <Link
              to="/settings"
              style={{ textDecoration: "none" }}
              key="settings"
            >
              <MenuItem>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </MenuItem>
            </Link>
          </MenuList>
          {/* <List>
          <ListItem button component={RouterLink} to="/">
            <ListItemIcon>
              <Brightness5Icon />
            </ListItemIcon>
            <ListItemText primary="Expanse" />
          </ListItem>
          <ListItem button component={RouterLink} to="/dnd">
            <ListItemIcon>
              <GavelIcon />
            </ListItemIcon>
            <ListItemText primary="DND" />
          </ListItem>
          <ListItem button component={RouterLink} to="/settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List> */}
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Switch>
              <Route exact path="/" component={Expanse} />
              <Route exact path="/dnd" component={Dnd} />
              <Route exact path="/expanse" component={Expanse} />
              <Route exact path="/settings" component={Settings} />
            </Switch>
          </Container>
        </main>
        <footer>
          <MadeWithLove />
        </footer>
      </div>
    </Router>
  );
};

export default App;
