import { PlayerType } from "@/types/types";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FaBaseballBall } from "react-icons/fa";
import Card from "./Card";

type Props = {
  playerData: PlayerType;
};

export default function AccordionComponent({ playerData }: Props) {
  return (
    <Accordion className="bg-lime-100" key={playerData._id}>
      <AccordionSummary
        expandIcon={<FaBaseballBall />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className="text-sky-900">{`${playerData.firstName} ${
          playerData.lastName === "N/A" ? "" : playerData.lastName
        }`}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Card playerData={playerData}></Card>
      </AccordionDetails>
    </Accordion>
  );
}
