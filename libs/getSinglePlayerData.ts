import axios from "axios";

export async function fetchSinglePlayerData(id: string) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/player/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
