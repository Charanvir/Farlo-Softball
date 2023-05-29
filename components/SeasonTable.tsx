import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StatType } from "@/types/types";

type Props = {
  teamData: StatType;
};

export default function SeasonTable({ teamData }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>At Bats</TableCell>
            <TableCell>Plate Appearances</TableCell>
            <TableCell>Batting Average</TableCell>
            <TableCell>Hits</TableCell>
            <TableCell>Singles</TableCell>
            <TableCell>Doubles</TableCell>
            <TableCell>Triples</TableCell>
            <TableCell>Home Runs</TableCell>
            <TableCell>Walks</TableCell>
            <TableCell>Strikeouts</TableCell>
            <TableCell>OPS</TableCell>
            <TableCell>On Base</TableCell>
            <TableCell>Slugging</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell>{teamData.atBats}</TableCell>
            <TableCell>{teamData.plateAppearance}</TableCell>
            <TableCell>{teamData.battingAverage}</TableCell>
            <TableCell>{teamData.hits}</TableCell>
            <TableCell>{teamData.singles}</TableCell>
            <TableCell>{teamData.doubles}</TableCell>
            <TableCell>{teamData.triples}</TableCell>
            <TableCell>{teamData.homeRuns}</TableCell>
            <TableCell>{teamData.walks}</TableCell>
            <TableCell>{teamData.strikeouts}</TableCell>
            <TableCell>{teamData.ops}</TableCell>
            <TableCell>{teamData.onBasePercentage}</TableCell>
            <TableCell>{teamData.sluggingPercentage}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
