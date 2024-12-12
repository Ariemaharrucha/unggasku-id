import axios from "axios";

// Create artikel dokter
export const createArtikelDokter = async (data) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/dokter/artikel`,
            data
        );
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to add artikel.");
    }
}

// Read artikel dokter author_id
export const getArtikelDokter = async (author_id) => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/dokter/artikel-dokter/${author_id}`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching artikel:", error);
        throw new Error("Failed to fetch artikel.");
    }
}

// Read artikel dokter id
export const getArtikelDokterDetail = async (id) => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/dokter/artikel/${id}`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching artikel:", error);
        throw new Error("Failed to fetch artikel.");
    }
}

// Update artikel dokter
export const updateArtikel = async (id, formData) => {
    try {
        const response = await axios.put(
            `${import.meta.env.VITE_API_URL}/dokter/artikel/${id}`,
            formData,
            {
            headers: { "Content-Type": "multipart/form-data" },
            }
        );
        console.log(response);
        
        return response.data;
    } catch (error) {
        console.error("Error updating artikel:", error);
        throw new Error("Failed to update artikel.");
    }
}

export const deleteArtikel = async (id) => {
    try {
        const response = await axios.delete(
            `${import.meta.env.VITE_API_URL}/dokter/artikel/${id}`
        );
        return response.data;
    } catch (error) {
        console.error("Error deleting artikel:", error);
        throw new Error("Failed to delete artikel.");
    }
}
