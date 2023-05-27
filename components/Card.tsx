import { PlayerType } from "@/types/types";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  playerData: PlayerType;
};

export default function Card({ playerData }: Props) {
  const router = useRouter();
  const clickHandler = () => {
    router.push(`/player/${playerData._id}`);
  };

  return (
    <div className="flex flex-col items-center">
      <button className="" onClick={clickHandler}>
        View {playerData.firstName}s Player Page
      </button>
    </div>
  );
}
