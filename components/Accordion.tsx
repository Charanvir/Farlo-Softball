import { PlayerType } from "@/types/types";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FaBaseballBall } from "react-icons/fa";

type Props = {
  playerData: PlayerType;
};

export default function AccordionComponent({ playerData }: Props) {
  return (
    <Accordion key={playerData._id}>
      <AccordionSummary
        expandIcon={<FaBaseballBall />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{`${playerData.firstName} ${
          playerData.lastName === "N/A" ? "" : playerData.lastName
        }`}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
