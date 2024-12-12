import axios from "axios";

export const addDokter = async (formdata) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/admin/dokter`,
            formdata
        );
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to add artikel.");
    }
}