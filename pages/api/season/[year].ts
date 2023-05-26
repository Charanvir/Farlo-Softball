import dbConnect from "@/libs/dbConnect";
import Stats from "@/models/Stats";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();
    const seasonData = await Stats.find({ year: req.query.year });
    if (seasonData.length === 0) {
      res.status(404).send({ message: "Data not found", data: {} });
    }
    res.status(200).send(seasonData);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error finding the season data", error: error });
  }
}
