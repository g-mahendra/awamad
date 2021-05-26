import React from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
  },
  text: {
    width: theme.spacing(35),
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
}));

const DataForm = () => {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [branch, setBranch] = React.useState("");
  const [idno, setIdno] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [successMsg, setSuccessMsg] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:5000/addrecords", {
        name,
        branch,
        id_no: idno,
        mobile,
        address,
      });
      setSuccess(true);
      setSuccessMsg("Data Submited successfully");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Grid className={classes.container} container>
      <Paper elevation={10} style={{ backgroundColor: "#777" }}>
        <Paper>
          <form className={classes.form}>
            <Typography variant="h5" component="h5">
              GATE Form
            </Typography>
            <TextField
              label="Enter Name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={classes.text}
              id="Name"
            ></TextField>
            <TextField
              label="Enter Branch"
              placeholder="Enter Branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className={classes.text}
              id="Branch"
            ></TextField>
            <TextField
              label="Enter ID Number"
              placeholder="Enter ID Number"
              value={idno}
              onChange={(e) => setIdno(e.target.value)}
              className={classes.text}
              id="IDNo"
            ></TextField>
            <TextField
              label="Enter Mobile Number"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className={classes.text}
              id="Mobile"
            ></TextField>
            <TextField
              label="Enter Address"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={classes.text}
              id="Address"
            ></TextField>
          </form>
        </Paper>
        <Paper
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            backgroundColor: "#dcdfe4",
          }}
        >
          {success ? (
            <Typography variant="h6" component="h6">
              {successMsg}
            </Typography>
          ) : null}
          <Button
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "5px 60px",
            }}
            variant="contained"
            color="primary"
            onClick={onSubmit}
          >
            Submit
          </Button>
        </Paper>
      </Paper>
    </Grid>
  );
};

export default DataForm;
