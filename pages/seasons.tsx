import { fetchAllSeasonsData } from "@/libs/getAllSeasonsData";
import { StatType } from "@/types/types";
import SeasonOverviewCard from "@/components/SeasonOverviewCard";

interface leadersInterface {
  battingAverageLeader: Partial<StatType>;
  hitsLeader: Partial<StatType>;
  opsLeader: Partial<StatType>;
}

export default function Seasons({
  teamData,
  data2020,
  data2021,
  data2022,
}: {
  teamData: StatType[];
  data2020: leadersInterface;
  data2021: leadersInterface;
  data2022: leadersInterface;
}) {
  return (
    <div>
      <h1 className="text-center text-3xl py-3 bg-gray-200 underline">
        Seasons Overview
      </h1>
      <div className="flex justify-center border-style border-2 w-4/5 m-auto my-5">
        <SeasonOverviewCard
          teamData={teamData[0]}
          leaders={data2020}
        ></SeasonOverviewCard>
      </div>
      <div className="flex justify-center border-style border-2 w-4/5 m-auto my-5">
        <SeasonOverviewCard
          teamData={teamData[1]}
          leaders={data2021}
        ></SeasonOverviewCard>
      </div>
      <div className="flex justify-center border-style border-2 w-4/5 m-auto my-5">
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
