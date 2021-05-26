import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DataTable from "./components/DataTable";
import Home from "./components/Home";
import DataForm from "./components/DataForm";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const App = () => {
  return (
    <Router>
      <div>
        <Grid
          container
          style={{
            display: "flex",
            fledDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: "10vh",
            width: "100vw",
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
          }}
        >
          <Typography component="h4" variant="h4">
            AWAMAD Assignment 9
          </Typography>
          <nav>
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingRight: 20,
                listStyleType: "none",
              }}
            >
              <li style={{ marginLeft: 10 }}>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.w3schools.com/"
                >
                  W3Schools
                </a>
              </li>
              <li style={{ marginLeft: 10 }}>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.udemy.com"
                >
                  Udemy
                </a>
              </li>
              <li style={{ marginLeft: 10 }}>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.coursera.org/in"
                >
                  Coursera
                </a>
              </li>
            </ul>
          </nav>
        </Grid>

        <Switch>
          <Route path="/getgaterecords">
            <DataTable />
          </Route>
          <Route path="/addrecords">
            <DataForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
