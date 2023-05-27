import axios from "axios";

export async function fetchAllSeasonsData() {
  try {
    // Getting the team data from each year
    const responseTeam = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/stats/`
    );
    const teamData = responseTeam.data;
    // Getting the stats for 2020
    const leaders2020 = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/leader/2020`
    );
    const data2020 = leaders2020.data;
    // Getting the stats for 2021
    const leaders2021 = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/leader/2021`
    );
    const data2021 = leaders2021.data;
    // Getting the stats for 2022
    const leaders2022 = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/leader/2022`
    );
    const data2022 = leaders2022.data;
    return {
      teamData: teamData,
      data2020: data2020,
      data2021: data2021,
      data2022: data2022,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
