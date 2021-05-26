import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "90vh",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.container} container>
      <Grid xs={12} className={classes.item} sm={6} item container>
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/getgaterecords"
        >
          <Button
            style={{
              padding: "15px 50px",
            }}
            variant='contained'
            color='primary'
          >
            Show All Data
          </Button>
        </Link>
      </Grid>
      <Grid xs={12} className={classes.item} sm={6} item container>
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/addrecords"
        >
          <Button
            style={{
              padding: "15px 50px",
            }}
            variant='outlined'
            color='primary'
          >
            Insert Data 
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Home;
