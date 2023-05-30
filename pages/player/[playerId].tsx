import React from "react";
import { fetchSinglePlayerData } from "@/libs/getSinglePlayerData";
import { PlayerType } from "@/types/types";
import dbConnect from "@/libs/dbConnect";
import Player from "@/models/Player";
import PlayerProfile from "@/components/PlayerProfile";

interface ParamsType {
  playerId: number;
}

export default function SinglePlayer({
  playerData,
}: {
  playerData: PlayerType;
}) {
  let careerStats = [];
  if (playerData.stats.length >= 1) {
    for (let i = 0; i < playerData.stats.length; i++) {
      careerStats.push({
        statName: "At Bats",
        stat: playerData.stats[i].atBats,
      });
      careerStats.push({
        statName: "Hits",
        stat: playerData.stats[i].hits,
      });
      careerStats.push({
        statName: "Singles",
        stat: playerData.stats[i].singles,
      });
      careerStats.push({
        statName: "Doubles",
        stat: playerData.stats[i].doubles,
      });
      careerStats.push({
        statName: "Triples",
        stat: playerData.stats[i].triples,
      });
      careerStats.push({
        statName: "Home Runs",
        stat: playerData.stats[i].homeRuns,
      });
      careerStats.push({
        statName: "Walks",
        stat: playerData.stats[i].walks,
      });
      careerStats.push({
        statName: "Strikeouts",
        stat: playerData.stats[i].strikeouts,
      });
      careerStats.push({
        statName: "OPS",
        stat: playerData.stats[i].ops,
      });
      careerStats.push({
        statName: "On Base %",
        stat: playerData.stats[i].onBasePercentage,
      });
      careerStats.push({
        statName: "Slugging %",
        stat: playerData.stats[i].sluggingPercentage,
      });
    }
  }
  return (
    <div>
      <PlayerProfile
        firstName={playerData.firstName}
        lastName={playerData.lastName}
        birthDate={playerData.birthDate}
        profilePictureName={playerData.profilePictureName}
        stats={careerStats}
      ></PlayerProfile>
    </div>
  );
}

export async function getStaticProps({ params }: { params: ParamsType }) {
  const playerId = params.playerId.toString();
  const playerData = await fetchSinglePlayerData(playerId);
  return {
    props: {
      playerData,
    },
  };
}

export async function getStaticPaths() {
  await dbConnect();
  const playersId = await Player.find({}, "_id");
  const paths = playersId.map((player: PlayerType) => ({
    params: { playerId: player._id.toString() },
  }));

  return { paths, fallback: "blocking" };
}
