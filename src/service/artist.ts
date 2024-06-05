import axios from "axios";

const url = "http://localhost:8080";

export interface IArtist {
  id: number;
  name: string;
  twitter: string;
}

export async function getAllArtist(token: String) {
  try {
    const { data } = await axios.get(`${url}/api/artist`, {
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    });

    return { data };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return { error: error.message };
    }
    return { error: "unknown", data: [] };
  }
}
