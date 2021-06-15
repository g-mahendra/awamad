import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Home from "./Home";
import Review from "./Review";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  }));

const App = () => {
    const classes = useStyles();
  return (
    <Router>
      <Grid className={classes.root} container>
        <Typography variant="h3" component="h3">
          Welcome to Photo gallary
        </Typography>
      </Grid>
      <Switch>
        <Route exact path="/home/review">
          <Review />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
