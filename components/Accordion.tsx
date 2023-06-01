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
    <Accordion
      className="sm:w-2/3 w-4/5 m-auto"
      key={playerData._id}
      style={{ margin: "auto", background: "transparent" }}
    >
      <AccordionSummary
        expandIcon={<FaBaseballBall />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{ backgroundColor: "white" }}
      >
        <Typography className="text-sky-900 ">{`${playerData.firstName} ${
          playerData.lastName === "N/A" ? "" : playerData.lastName
        }`}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <Card playerData={playerData}></Card>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
