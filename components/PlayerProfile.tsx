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

export default function PlayerProfile({
  firstName,
  lastName,
  birthDate,
  profilePictureName,
  stats,
}: Props) {
  console.log(stats.length);
  console.log(stats);
  return <div>SinglePlayer</div>;
}
