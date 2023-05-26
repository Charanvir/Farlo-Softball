import { fetchAllPlayerData } from "@/libs/getAllPlayerData";
import { PlayerType } from "@/types/types";

export default function players({ playerData }: { playerData: PlayerType[] }) {
  return (
    <div>
      {playerData.map((player: PlayerType) => (
        <div key={player._id}>
          <p>{player.firstName}</p>
        </div>
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
