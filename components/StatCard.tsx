import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FaBaseballBall } from "react-icons/fa";
import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

type Props = {
  statData: {
    name: string;
    stat: number;
    statName: string;
  }[];
};

export default function StatCard({ statData }: Props) {
  statData.sort(function (a, b) {
    if (a.stat < b.stat) {
      return 1;
    }
    if (a.stat > b.stat) {
      return -1;
    }
    return 0;
  });
  statData = statData.filter((obj) => obj.name !== "team");
  return (
    <div className="text-center w-1/2 sm:w-1/4">
      <div className="bg-gray-200">
        <h2 className="text-xl">{statData[0].name}</h2>
        <Avatar
          src="/images/defaultProfile.png"
          alt={`${statData[0].name}`}
          className="m-auto"
        ></Avatar>
        <p className="text-lg">{statData[0].stat}</p>
        <p className="text-lg">{statData[0].statName}</p>
      </div>

      <Accordion className="bg-sky-100">
        <AccordionSummary
          expandIcon={<FaBaseballBall />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="text-sky-900">View Team</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>{statData[0].statName}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {statData.map((data, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.stat}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
