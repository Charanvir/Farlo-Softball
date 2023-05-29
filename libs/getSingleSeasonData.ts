import axios from "axios";

export async function fetchSingleSeasonData(year: string) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/season/${year}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
