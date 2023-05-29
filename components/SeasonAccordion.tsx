import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FaBaseballBall } from "react-icons/fa";
import { StatType } from "@/types/types";

type Props = {
  teamData: StatType;
};

export default function SeasonAccordion({ teamData }: Props) {
  console.log(teamData);
  return (
    <Accordion className="bg-sky-100">
      <AccordionSummary
        expandIcon={<FaBaseballBall />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className="text-sky-900">View Team Stats</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>Table Incoming</div>
      </AccordionDetails>
    </Accordion>
  );
}
