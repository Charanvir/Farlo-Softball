import axios from "axios";

export async function fetchAllPlayerData() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/players/`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
