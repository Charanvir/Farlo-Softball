import { fetchAllSeasonsData } from "@/libs/getAllSeasonsData";
import { StatType } from "@/types/types";

export default function Seasons({
  teamData,
  data2020,
  data2021,
  data2022,
}: {
  teamData: StatType[];
  data2020: Partial<StatType>;
  data2021: Partial<StatType>;
  data2022: Partial<StatType>;
}) {
  return <div>Seasons</div>;
}

export async function getStaticProps() {
  try {
    const seasonsData = await fetchAllSeasonsData();
    return {
      props: {
        teamData: seasonsData.teamData,
        data2020: seasonsData.data2020,
        data2021: seasonsData.data2021,
        data2022: seasonsData.data2022,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
