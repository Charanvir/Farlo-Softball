import { StatType } from "@/types/types";
import React from "react";
import { Avatar } from "@mui/material";
import SeasonAccordion from "./SeasonAccordion";
import Link from "next/link";

// Show stat and stats leader
// Table showing team stats for that year

interface leadersInterface {
  battingAverageLeader: Partial<StatType>;
  hitsLeader: Partial<StatType>;
  opsLeader: Partial<StatType>;
}

type Props = {
  teamData: StatType;
  leaders: leadersInterface;
};

export default function SeasonOverviewCard({ teamData, leaders }: Props) {
  return (
    <div className="w-full text-sky-900 bg-slate-100 text-center">
      <h1 className="text-center text-2xl underline">{teamData.year}</h1>
      <div className="flex justify-around">
        <div>
          <h2 className="text-xl hidden sm:block">BA Leader</h2>
          <h2 className="text-xl sm:hidden">BA</h2>
          <Avatar
            src="./images/defaultProfile.png"
            alt={leaders.battingAverageLeader.type}
            className="m-auto"
          ></Avatar>
          <h3 className="text-lg">{leaders.battingAverageLeader.type}</h3>
          <p className="text-lg">
            {leaders.battingAverageLeader.battingAverage}
          </p>
        </div>
        <div>
          <h2 className="text-xl hidden sm:block">Hits Leader</h2>
          <h2 className="text-xl sm:hidden">Hits</h2>
          <Avatar
            src="./images/defaultProfile.png"
            alt={leaders.hitsLeader.type}
            className="m-auto"
          ></Avatar>
          <h3 className="text-lg">{leaders.hitsLeader.type}</h3>
          <p className="text-lg">{leaders.hitsLeader.hits}</p>
        </div>
        <div>
          <h2 className="text-xl hidden sm:block">OPS Leader</h2>
          <h2 className="text-xl sm:hidden">OPS</h2>
          <Avatar
            src="./images/defaultProfile.png"
            alt={leaders.opsLeader.type}
            className="m-auto"
          ></Avatar>
          <h3 className="text-lg">{leaders.opsLeader.type}</h3>
          <p className="text-lg">{leaders.opsLeader.ops}</p>
        </div>
      </div>
      <SeasonAccordion teamData={teamData}></SeasonAccordion>
      <Link href={`/season/${teamData.year}`}>
        View more details for the {teamData.year}
      </Link>
    </div>
  );
}
