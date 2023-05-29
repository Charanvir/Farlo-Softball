import { StatType } from "@/types/types";
import React from "react";
import { Avatar } from "@mui/material";

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
  console.log(teamData);
  console.log(leaders);

  return (
    <div className="w-full text-sky-900 bg-slate-100 text-center">
      <h1 className="text-center text-2xl underline">{teamData.year}</h1>
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl hidden sm:block">BA Leader</h2>
          <h2 className="text-xl sm:hidden">BA</h2>
          <Avatar
            src="./images/defaultProfile.png"
            alt={leaders.battingAverageLeader.type}
          ></Avatar>
          <h3 className="text-lg">{leaders.battingAverageLeader.type}</h3>
          <p>{leaders.battingAverageLeader.battingAverage}</p>
        </div>
        <div>
          <h2 className="text-xl hidden sm:block">Hits Leader</h2>
          <h2 className="text-xl sm:hidden">Hits</h2>
          <Avatar
            src="./images/defaultProfile.png"
            alt={leaders.hitsLeader.type}
          ></Avatar>
          <h3 className="text-lg">{leaders.hitsLeader.type}</h3>
          <p>{leaders.hitsLeader.hits}</p>
        </div>
        <div>
          <h2 className="text-xl hidden sm:block">OPS Leader</h2>
          <h2 className="text-xl sm:hidden">OPS</h2>
          <Avatar
            src="./images/defaultProfile.png"
            alt={leaders.opsLeader.type}
          ></Avatar>
          <h3 className="text-lg">{leaders.opsLeader.type}</h3>
          <p>{leaders.opsLeader.ops}</p>
        </div>
      </div>
    </div>
  );
}
