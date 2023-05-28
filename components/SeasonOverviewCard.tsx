import { StatType } from "@/types/types";
import React from "react";

type Props = {
  teamData: StatType;
  leaders: Partial<StatType>;
};

export default function SeasonOverviewCard({ teamData, leaders }: Props) {
  console.log(teamData);
  console.log(leaders);
  return (
    <div>
      <h1 className="text-2xl">{teamData.year}</h1>
    </div>
  );
}
