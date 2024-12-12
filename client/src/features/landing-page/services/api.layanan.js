import axios from "axios"

export const getDokter = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/dokter/list`);
      return response.data.data;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch users.");
    }
};