import axios from "axios";

const url = "http://localhost:8080";

export async function Register({
  fullName,
  username,
  password,
  role,
}: {
  fullName: string;
  username: string;
  password: string;
  role: string;
}) {
  try {
    const { data } = await axios.post(`${url}/auth/register`, {
      fullName,
      username,
      password,
      role,
    });

    return { data };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return { error: error.message };
    }
    return { error: "unknown" };
  }
}
