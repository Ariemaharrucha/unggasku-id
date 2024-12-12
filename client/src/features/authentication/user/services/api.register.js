import axios from "axios";

export const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/register`,
      {
        username,
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Terjadi kesalahan pada jaringan");
  }
};
