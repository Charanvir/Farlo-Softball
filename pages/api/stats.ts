import { NextApiResponse, NextApiRequest } from "next";
import dbConnect from "@/libs/dbConnect";
import Stats from "@/models/Stats";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();
    const statsData = await Stats.find({ type: "team" });
    return res.status(200).json(statsData);
  } catch (error) {
    return res.status(500).send(error);
  }
}
