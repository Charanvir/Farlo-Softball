import React from "react";
import { fetchSingleSeasonData } from "@/libs/getSingleSeasonData";
import dbConnect from "@/libs/dbConnect";
import Stats from "@/models/Stats";
import { StatType } from "@/types/types";

interface SeasonParamType {
  year: string;
}

export default function SingleSeason({
  seasonData,
}: {
  seasonData: StatType[];
}) {
  console.log(seasonData);
  return (
    <div>
      <h1>{seasonData[0].year}</h1>
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
