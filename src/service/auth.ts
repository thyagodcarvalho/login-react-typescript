import axios from "axios";

const url = "http://localhost:8080";

export async function loginRequest(username: string, password: string) {
  try {
    const { data } = await axios.post(`${url}/auth/login`, {
      username,
      password,
    });

    return { data };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return { error: error.message };
    }
    return { error: "unknown" };
  }
}

export async function tokenValidation(token: String) {
  try {
    const { data } = await axios.get(`${url}/auth/validate?token=${token}`, {
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    return { data };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return { error: error.message };
    }
    return { error: "unknown" };
  }
}
