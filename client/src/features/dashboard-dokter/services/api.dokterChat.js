import axios from "axios";

export const getUsers = async (user_id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/dokter/${user_id}/users`
    );
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch messages:", error);
    throw error;
  }
};

export const getMessages = async (konsultasi_id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/messages/${konsultasi_id}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch messages:", error);
    throw error;
  }
};
