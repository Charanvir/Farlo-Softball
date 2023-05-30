/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  firstName: string;
  lastName: string;
  birthDate: string;
  profilePictureName: string;
  stats:
    | {
        stat: number;
        statName: string;
      }[]
    | [];
};

type totalStatsType = {
  [key: string]: number;
};

export default function PlayerProfile({
  firstName,
  lastName,
  birthDate,
  profilePictureName,
  stats,
}: Props) {
  function sumValuesOfLikeKeys(arr: Props["stats"]): totalStatsType {
    const result: totalStatsType = {};

    arr.forEach((obj) => {
      if (obj.statName) {
        if (!result[obj.statName]) {
          result[obj.statName] = 0;
        }
        result[obj.statName] += obj.stat;
      }
    });

    return result;
  }

  const totalStats = sumValuesOfLikeKeys(stats);

  let battingAverage: number | undefined;
  let onBase: number | undefined;
  let slugging: number | undefined;
  let ops: number | undefined;
  if (Object.keys(totalStats).length > 0) {
    battingAverage =
      totalStats["hits"] && totalStats["atBats"]
        ? totalStats["hits"] / totalStats["atBats"]
        : undefined;
    onBase =
      totalStats["walks"] &&
      totalStats["hits"] &&
      totalStats["plateAppearances"]
        ? (totalStats["walks"] + totalStats["hits"]) /
          totalStats["plateAppearances"]
        : undefined;
    slugging =
      totalStats["singles"] &&
      totalStats["doubles"] &&
      totalStats["triples"] &&
      totalStats["homeRuns"] &&
      totalStats["atBats"]
        ? (totalStats["singles"] +
            totalStats["doubles"] * 2 +
            totalStats["triples"] * 3 +
            totalStats["homeRuns"] * 4) /
          totalStats["atBats"]
        : undefined;
    ops = onBase && slugging ? onBase + slugging : undefined;
  }

  return (
    <div className="grid sm:grid-cols-6 flex items-center pt-10">
      <div className="sm:col-span-2 flex justify-center bg-white sm:w-3/4 w-1/2 mx-auto sm:mx-auto border-8 border-black border-solid">
        <img
          src="/images/defaultProfile.png"
          alt="Profile Profile"
          className="w-full h-auto m-2"
        />
      </div>
      <div className="sm:col-span-4 flex flex-col justify-center pt-5 sm:pt-0 bg-white border-8 border-black border-solid">
        <h2 className="self-center text-3xl">
          {firstName} {lastName}
        </h2>
        <h2 className="self-center pt-5">D.O.B: {birthDate}</h2>
        {Object.keys(totalStats).length > 0 && (
          <div className="self-center pt-5">
            <div className="flex flex-wrap justify-around">
              <div className="m-2 bg-gray-300 p-2 rounded shadow-lg text-center">
                <p className="text-lg">Batting Avg</p>
                <p>{battingAverage?.toFixed(3)}</p>
              </div>
              <div className="m-2 bg-gray-300 p-2 rounded shadow-lg text-center">
                <p className="text-lg">Hits</p>
                <p>{totalStats.hits}</p>
              </div>
              <div className="m-2 bg-gray-300 p-2 rounded shadow-lg text-center">
                <p className="text-lg">Singles</p>
                <p>{totalStats.singles}</p>
              </div>
              <div className="m-2 bg-gray-300 p-2 rounded shadow-lg text-center">
                <p className="text-lg">Doubles</p>
                <p>{totalStats.doubles}</p>
              </div>
              <div className="m-2 bg-gray-300 p-2 rounded shadow-lg text-center">
                <p className="text-lg">Triples</p>
                <p>{totalStats.triples}</p>
              </div>
              <div className="m-2 bg-gray-300 p-2 rounded shadow-lg text-center">
                <p className="text-lg">Home Runs</p>
                <p>{totalStats.homeRuns}</p>
              </div>
              <div className="m-2 bg-gray-300 p-2 rounded shadow-lg text-center">
                <p className="text-lg">Walks</p>
                <p>{totalStats.walks}</p>
              </div>
              <div className="m-2 bg-gray-300 p-2 rounded shadow-lg text-center">
                <p className="text-lg">Strikeouts</p>
                <p>{totalStats.string}</p>
              </div>
              <div className="m-2 bg-gray-300 p-2 rounded shadow-lg text-center">
                <p className="text-lg">OPS</p>
                <p>{ops?.toFixed(3)}</p>
              </div>
              <div className="m-2 bg-gray-300 p-2 rounded shadow-lg text-center">
                <p className="text-lg">On Base</p>
                <p>{onBase?.toFixed(3)}</p>
              </div>
              <div className="m-2 bg-gray-300 p-2 rounded shadow-lg text-center">
                <p className="text-lg">Slugging</p>
                <p>{slugging?.toFixed(3)}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
