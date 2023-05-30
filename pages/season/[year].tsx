import React from "react";
import { fetchSingleSeasonData } from "@/libs/getSingleSeasonData";
import dbConnect from "@/libs/dbConnect";
import Stats from "@/models/Stats";
import { StatType } from "@/types/types";
import StatCard from "@/components/StatCard";

interface SeasonParamType {
  year: string;
}

export default function SingleSeason({
  seasonData,
}: {
  seasonData: StatType[];
}) {
  const battingAverageArray = [];
  const hitsArray = [];
  const doublesArray = [];
  const triplesArray = [];
  const homeRunsArray = [];
  const walksArray = [];
  const strikeoutsArray = [];
  const opsArray = [];
  const onBasePercentageArray = [];
  const sluggingArray = [];
  for (let i = 0; i < seasonData.length; i++) {
    battingAverageArray.push({
      name: seasonData[i].type,
      stat: seasonData[i].battingAverage,
      statName: "Batting Avg",
    });
    hitsArray.push({
      name: seasonData[i].type,
      stat: seasonData[i].hits,
      statName: "Hits",
    });
    doublesArray.push({
      name: seasonData[i].type,
      stat: seasonData[i].doubles,
      statName: "Doubles",
    });
    triplesArray.push({
      name: seasonData[i].type,
      stat: seasonData[i].triples,
      statName: "Triples",
    });
    homeRunsArray.push({
      name: seasonData[i].type,
      stat: seasonData[i].homeRuns,
      statName: "Home Runs",
    });
    walksArray.push({
      name: seasonData[i].type,
      stat: seasonData[i].walks,
      statName: "Walks",
    });
    strikeoutsArray.push({
      name: seasonData[i].type,
      stat: seasonData[i].strikeouts,
      statName: "Strikeouts",
    });
    opsArray.push({
      name: seasonData[i].type,
      stat: seasonData[i].ops,
      statName: "OPS",
    });
    onBasePercentageArray.push({
      name: seasonData[i].type,
      stat: seasonData[i].onBasePercentage,
      statName: "On Base %",
    });
    sluggingArray.push({
      name: seasonData[i].type,
      stat: seasonData[i].sluggingPercentage,
      statName: "Slugging %",
    });
  }

  return (
    <div>
      <h1 className="text-center text-3xl py-5 underline bg-white m-5">
        The {seasonData[0].year} Farlo Season
      </h1>
      <div className="flex flex-wrap justify-center">
        <StatCard statData={battingAverageArray}></StatCard>
        <StatCard statData={hitsArray}></StatCard>
        <StatCard statData={doublesArray}></StatCard>
        <StatCard statData={triplesArray}></StatCard>
        <StatCard statData={homeRunsArray}></StatCard>
        <StatCard statData={walksArray}></StatCard>
        <StatCard statData={strikeoutsArray}></StatCard>
        <StatCard statData={opsArray}></StatCard>
        <StatCard statData={onBasePercentageArray}></StatCard>
        <StatCard statData={sluggingArray}></StatCard>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }: { params: SeasonParamType }) {
  const seasonData = await fetchSingleSeasonData(params.year);
  return {
    props: {
      seasonData,
    },
  };
}

export async function getStaticPaths() {
  await dbConnect();
  const seasonIds = await Stats.find({}, "year");
  const paths = seasonIds.map((stat: StatType) => ({
    params: { year: stat.year.toString() },
  }));
  return { paths, fallback: "blocking" };
}
