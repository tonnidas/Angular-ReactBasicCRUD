import React, { useState, useEffect } from "react";
import ContestService from "../../service/contest.service";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function ListContest() {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await ContestService.listContest();
    setData(data);
    setLoaded(true);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loaded) {
    return (
      <div>
        <h3> Read Contest </h3>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Capacity</TableCell>
                <TableCell>Registration Allowed</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.capacity}</TableCell>
                  <TableCell>{String(row.registrationAllowed)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
