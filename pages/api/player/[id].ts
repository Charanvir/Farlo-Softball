import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/libs/dbConnect";
import Stats from "@/models/Stats";
import Player from "@/models/Player";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();
    const playerData = await Player.findOne({ _id: req.query.id }).populate({
      path: "stats",
      model: Stats,
    });
    res.status(200).send(playerData);
  } catch (error) {
    res.status(500).send({
      message: "There was a problem fetching the player data",
      error: error,
    });
  }
}
