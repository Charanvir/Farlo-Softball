import { fetchAllSeasonsData } from "@/libs/getAllSeasonsData";
import { StatType } from "@/types/types";
import SeasonOverviewCard from "@/components/SeasonOverviewCard";

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
  return (
    <div>
      <h1 className="text-center text-3xl py-3">Seasons Overview</h1>
      <div className="flex justify-center items-center">
        <SeasonOverviewCard
          teamData={teamData[0]}
          leaders={data2020}
        ></SeasonOverviewCard>
      </div>
      <div className="flex justify-center items-center">
        <SeasonOverviewCard
          teamData={teamData[1]}
          leaders={data2021}
        ></SeasonOverviewCard>
      </div>
      <div className="flex justify-center items-center">
        <SeasonOverviewCard
          teamData={teamData[2]}
          leaders={data2022}
        ></SeasonOverviewCard>
      </div>
    </div>
  );
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
