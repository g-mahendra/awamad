import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import axios from "../axios/axios";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const DataTable = () => {
  const classes = useStyles();
  const [data, setData] = React.useState([]);
  const [loading, setLoadinng] = React.useState(true);
  console.log(data.data)
  React.useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get("http://localhost:5000/getgaterecords");
        setData(result.data);
        setLoadinng(false);
      } catch (e) {
        console.log("Error is, ", e);
      }
    };
    getData();
  }, []);

  return (
    <TableContainer component={Paper}>
      {loading ? (
        <CircularProgress />
      ) : (
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Studet Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Student Branch
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Student ID
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Student Mobile
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Student Address
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.data.length !== 0 ? (
              data.data.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.branch}</TableCell>
                  <TableCell align="right">{row.id_no}</TableCell>
                  <TableCell align="right">{row.mobile}</TableCell>
                  <TableCell align="right">{row.address}</TableCell>
                </TableRow>
              ))
            ) : (
              <CircularProgress />
            )}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};
export default DataTable;
