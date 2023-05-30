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

  // On Mobile
  // Profile Picture should be centered and then bio information and career stats below
  // On Full Screen
  // Profile Picture and bio/career stats should be on the same row

  return <div>SinglePlayer</div>;
}
