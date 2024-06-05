import axios from "axios";
import { IAlbum } from "../components/album/types";

const url = "http://localhost:8080";

export async function saveAlbum(token: String, album: IAlbum) {
  try {
    const { data } = await axios.post(
      `${url}/api/album`,
      { ...album },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return { data };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return { error: error.message };
    }
    return { error: "unknown", data: [] };
  }
}

export async function updateAlbum(token: String, album: IAlbum) {
  try {
    const { data } = await axios.put(
      `${url}/api/album`,
      { ...album },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return { data };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return { error: error.message };
    }
    return { error: "unknown", data: [] };
  }
}

export async function getAllAlbum(token: String) {
  try {
    const { data } = await axios.get(`${url}/api/album`, {
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

export async function deleteAlbum(token: String, albumName: String) {
  try {
    const { data } = await axios.delete(`${url}/api/album/${albumName}`, {
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
