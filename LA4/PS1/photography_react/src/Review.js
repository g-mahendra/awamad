import React from "react";
import { useLocation } from "react-router";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Review = (props) => {
  const location = useLocation();
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `http://localhost:5000/getreview/${location.state.id}`
      );
      setData(result.data);
      console.log(result)
    };
    getData();
  }, []);
  return (
    <Grid container>
      <Typography component="h5" variant="h5">
        Review for Image {location.state.id}
      </Typography>
      <Grid container item>
        <img
          src={location.state.path}
          height="200px"
          width="400px"
          alt="image"
        ></img>
      </Grid>
      {data.length!=0 ? (
        <>
          <Grid item container>
            <Typography variant="h6" component="b">
              Author:
            </Typography>
            <Typography variant="h6" component="h6">
              {data[0].author}
            </Typography>
          </Grid>
          <Grid item container>
            <Typography variant="h6" component="b">
              Title:
            </Typography>
            <Typography variant="h6" component="h6">
              {data[0].title}
            </Typography>
          </Grid>
          <Grid item container>
            <Typography variant="h6" component="b">
              Review:
            </Typography>
            <Typography variant="h6" component="h6">
              {data[0].review}
            </Typography>
          </Grid>
        </>
      ) : null}
    </Grid>
  );
};

export default Review;
