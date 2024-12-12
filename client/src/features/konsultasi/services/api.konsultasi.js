import axios from "axios";

export const getMessages = async (konsultasi_id) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/messages/${konsultasi_id}`);
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch messages:", error);
    throw error;
  }
};

export const getDokter = async (user_id) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/konsultasi/dokter/${user_id}`);
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch messages:", error);
    throw error;
  }
}
