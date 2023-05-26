import { fetchAllPlayerData } from "@/libs/getAllPlayerData";
import { PlayerType } from "@/types/types";
import AccordionComponent from "@/components/Accordion";

export default function players({ playerData }: { playerData: PlayerType[] }) {
  playerData.sort((a: PlayerType, b: PlayerType) => {
    if (a.firstName < b.firstName) {
      return -1;
    }
    if (a.firstName > b.firstName) {
      return 1;
    }
    return 0;
  });
  return (
    <div>
      <h1 className="text-center text-2xl py-5 text-sky-900">
        Meet the Farlo Players
      </h1>
      {playerData.map((player) => (
        <AccordionComponent
          key={player._id}
          playerData={player}
        ></AccordionComponent>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  try {
    const playerData = await fetchAllPlayerData();
    return {
      props: {
        playerData,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
