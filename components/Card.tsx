/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import { PlayerType } from "@/types/types";
import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Card.module.css";
import Image from "next/image";

type Props = {
  playerData: PlayerType;
};

export default function Card({ playerData }: Props) {
  let battingAverage: number | string = "N/A";
  let hits: number | string = "N/A";
  let atBats: number | string = "N/A";
  let homeRuns: number | string = "N/A";
  let onBase: number | string = "N/A";
  let plateAppearances: number | string = "N/A";
  let walks: number | string = "N/A";

  if (playerData.stats.length === 1) {
    battingAverage = playerData.stats[0].battingAverage;
    atBats = playerData.stats[0].atBats;
    hits = playerData.stats[0].hits;
    homeRuns = playerData.stats[0].homeRuns;
    onBase = playerData.stats[0].onBasePercentage;
    plateAppearances = playerData.stats[0].plateAppearance;
    walks = playerData.stats[0].walks;
  } else if (playerData.stats.length > 1) {
    atBats = 0;
    hits = 0;
    homeRuns = 0;
    plateAppearances = 0;
    walks = 0;
    for (let i = 0; i < playerData.stats.length; i++) {
      atBats += playerData.stats[i].atBats;
      hits += playerData.stats[i].hits;
      homeRuns += playerData.stats[i].homeRuns;
      plateAppearances += playerData.stats[i].plateAppearance;
      walks += playerData.stats[i].walks;
    }
    battingAverage = (hits / atBats).toFixed(3);
    onBase = ((walks + hits) / plateAppearances).toFixed(3);
  }
  // console.log(playerData.firstName);
  // console.log("at Bats", atBats);
  // console.log("hits", hits);
  // console.log("plateAppearances", plateAppearances);
  // console.log("walks", walks);
  const [isFlipped, setIsFlipped] = useState(false);
  const router = useRouter();
  const clickHandler = () => {
    router.push(`/player/${playerData._id}`);
  };

  const flipHandler = () => {
    setIsFlipped((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`${styles.card} cursor-pointer`} onClick={flipHandler}>
        <div
          className={`${styles.card__inner} ${
            isFlipped ? styles["is-flipped"] : ""
          }`}
        >
          <div
            className={`${styles.card__face} ${styles.card__face__front} h-full flex flex-col`}
          >
            <div className="absolute top-7 text-4xl right-1 z-10 bg-lime-100 text-sky-900 py-1 px-2 transform rotate-45">
              Farlo
            </div>

            <div className="relative w-full flex-grow overflow-hidden">
              <Image
                src={"/images/defaultProfile.png"}
                alt="Profile"
                className="object-cover"
                fill
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold text-xl text-sky-900">
                {playerData.firstName} {playerData.lastName}
              </h2>
            </div>
          </div>
          <div
            className={`${styles.card__face} ${styles.card__face__back} bg-gray-500 text-white h-full flex flex-col`}
          >
            <div className="relative w-full flex-grow overflow-hidden">
              <Image
                src={"/images/defaultActionPicture.png"}
                alt="Action"
                className="object-cover"
                fill
              />
            </div>
            <div className="p-4 text-sky-900">
              <p className="text-md underline">Career Stats:</p>
              <div className="flex justify-between">
                <div>
                  <p>AB</p>
                  <p className="text-sm border-2 border-black rounded p-2 m-1">
                    {atBats}
                  </p>
                </div>
                <div>
                  <p>BA%</p>
                  <p className="text-sm border-2 border-black rounded p-2 m-1">
                    {battingAverage}
                  </p>
                </div>
                <div>
                  <p>HR</p>
                  <p className="text-sm border-2 border-black rounded p-2 m-1">
                    {homeRuns}
                  </p>
                </div>
                <div>
                  <p>OB%</p>
                  <p className="text-sm border-2 border-black rounded p-2 m-1">
                    {onBase}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="mt-4 text-sky-900 text-md px-4 py-2 rounded shadow border-2 border-black"
        style={{ backgroundColor: "rgb(238,232,170)" }}
        onClick={clickHandler}
      >
        View {playerData.firstName}'s Player Page
      </button>
    </div>
  );
}
