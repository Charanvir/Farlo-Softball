import { StatType } from "@/types/types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

type Props = {
  stats: StatType[];
};

export default function SinglePlayerTable({ stats }: Props) {
  console.log(stats);
  return (
    <div className="sm:flex sm:flex-col">
      {stats.map((stat, index) => (
        <div className="mb-4 overflow-x-auto" key={index}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Year</TableCell>
                  <TableCell>At Bats</TableCell>
                  <TableCell>Plate Apps</TableCell>
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
                <TableRow>
                  <TableCell>{stat.year}</TableCell>
                  <TableCell>{stat.atBats}</TableCell>
                  <TableCell>{stat.plateAppearance}</TableCell>
                  <TableCell>{stat.battingAverage}</TableCell>
                  <TableCell>{stat.hits}</TableCell>
                  <TableCell>{stat.singles}</TableCell>
                  <TableCell>{stat.doubles}</TableCell>
                  <TableCell>{stat.triples}</TableCell>
                  <TableCell>{stat.homeRuns}</TableCell>
                  <TableCell>{stat.walks}</TableCell>
                  <TableCell>{stat.strikeouts}</TableCell>
                  <TableCell>{stat.ops}</TableCell>
                  <TableCell>{stat.onBasePercentage}</TableCell>
                  <TableCell>{stat.sluggingPercentage}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ))}
    </div>
  );
}
