import { NextApiResponse, NextApiRequest } from "next";
import dbConnect from "@/libs/dbConnect";
import Player from "@/models/Player";
import Stats from "@/models/Stats";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();
    const playerData = await Player.find({}).populate({
      path: "stats",
      model: Stats,
    });
    return res.status(200).json(playerData);
  } catch (error) {
    return res.status(500).send(error);
  }
}
