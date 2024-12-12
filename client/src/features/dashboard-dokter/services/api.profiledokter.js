import axios from "axios";

export const getDokter = async (id) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/dokter/profile-details/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch users.");
    }
};