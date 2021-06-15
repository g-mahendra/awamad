import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    margin: "20px",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space evenly",
  },
}));

const images = [
  {
    id: "1",
    image: "/images/1.jpg",
  },
  {
    id: "2",
    image: "/images/2.jpg",
  },
  {
    id: "3",
    image: "/images/3.jpg",
  },
  {
    id: "4",
    image: "/images/4.jpg",
  },
  {
    id: "5",
    image: "/images/5.jpg",
  },
  {
    id: "6",
    image: "/images/6.jpg",
  },
];

const Home = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <Typography gutterBottom variant="h4" component="h4">
        Following are some beautiful images by some authors
      </Typography>
      <Grid className={classes.imageContainer} item container>
        {images.map((photo) => {
          return (
            <Link
              to={{
                pathname: "/home/review",
                state: {
                  id: photo.id,
                  path: photo.image,
                },
              }}
            >
              <Grid className={classes.image} key={photo.id} item>
                <img
                  height="200px"
                  width="300px"
                  src={photo.image}
                  alt="image"
                ></img>
              </Grid>
            </Link>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Home;
