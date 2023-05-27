import dbConnect from "@/libs/dbConnect";
import Stats from "@/models/Stats";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();
    // Getting the season leader in hits
    const hitsLeader = await Stats.findOne(
      {
        year: req.query.year,
        type: { $ne: "team" },
      },
      "hits type"
    ).sort("-hits");
    if (hitsLeader.length === 0) {
      res.status(404).send({ message: "Data not found", data: {} });
    }
    // Getting the season leader in battingAverage
    const battingAverageLeader = await Stats.findOne(
      {
        year: req.query.year,
        type: { $ne: "team" },
      },
      "battingAverage type"
    ).sort("-battingAverage");
    if (battingAverageLeader.length === 0) {
      res.status(404).send({ message: "Data not found", data: {} });
    }
    // Getting the season leader in ops
    const opsLeader = await Stats.findOne(
      {
        year: req.query.year,
        type: { $ne: "team" },
      },
      "ops type"
    ).sort("-ops");
    if (opsLeader.length === 0) {
      res.status(404).send({ message: "Data not found", data: {} });
    }
    res.status(200).send({
      hitsLeader: hitsLeader,
      battingAverageLeader: battingAverageLeader,
      opsLeader: opsLeader,
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error finding the season data", error: error });
  }
}
