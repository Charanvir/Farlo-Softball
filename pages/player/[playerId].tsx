import React from "react";
import { fetchSinglePlayerData } from "@/libs/getSinglePlayerData";
import { PlayerType } from "@/types/types";
import dbConnect from "@/libs/dbConnect";
import Player from "@/models/Player";
import Stats from "@/models/Stats";

interface ParamsType {
  playerId: number;
}

export default function SinglePlayer({
  playerData,
}: {
  playerData: PlayerType[];
}) {
  console.log(playerData);
  return <div>[playerId]</div>;
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
