import React from "react";
import { fetchSinglePlayerData } from "@/libs/getSinglePlayerData";
import { PlayerType } from "@/types/types";
import dbConnect from "@/libs/dbConnect";
import Player from "@/models/Player";
import PlayerProfile from "@/components/PlayerProfile";
import SinglePlayerTable from "@/components/SinglePlayerTable";

interface ParamsType {
  playerId: number;
}

export default function SinglePlayer({
  playerData,
}: {
  playerData: PlayerType;
}) {
  console.log(playerData.stats);
  let careerStats = [];
  if (playerData.stats.length >= 1) {
    for (let i = 0; i < playerData.stats.length; i++) {
      careerStats.push({
        statName: "plateAppearances",
        stat: playerData.stats[i].plateAppearance,
      });
      careerStats.push({
        statName: "atBats",
        stat: playerData.stats[i].atBats,
      });
      careerStats.push({
        statName: "hits",
        stat: playerData.stats[i].hits,
      });
      careerStats.push({
        statName: "singles",
        stat: playerData.stats[i].singles,
      });
      careerStats.push({
        statName: "doubles",
        stat: playerData.stats[i].doubles,
      });
      careerStats.push({
        statName: "triples",
        stat: playerData.stats[i].triples,
      });
      careerStats.push({
        statName: "homeRuns",
        stat: playerData.stats[i].homeRuns,
      });
      careerStats.push({
        statName: "walks",
        stat: playerData.stats[i].walks,
      });
      careerStats.push({
        statName: "strikouts",
        stat: playerData.stats[i].strikeouts,
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
      {playerData.stats.length > 0 && (
        <div className="my-5">
          <h2 className="text-center text-3xl text-slate-900 mb-2 underline w-1/2 mx-auto bg-white border-4 border-black border-solid">
            Yearly Stats
          </h2>
          <SinglePlayerTable stats={playerData.stats}></SinglePlayerTable>
        </div>
      )}
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
