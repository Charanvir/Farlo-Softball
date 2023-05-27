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
            className={`${styles.card__face} ${styles.card__face__front} bg-gray-300 h-full flex flex-col`}
          >
            <div className="relative w-full flex-grow overflow-hidden">
              <Image
                src={"/images/defaultProfile.png"}
                alt="Profile"
                className="object-cover"
                fill
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold text-lg">
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
            <div className="p-4">
              <h2>{playerData.firstName}s Stats</h2>
              <p>Career Stats: </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow"
        onClick={clickHandler}
      >
        View {playerData.firstName}s Player Page
      </button>
    </div>
  );
}
