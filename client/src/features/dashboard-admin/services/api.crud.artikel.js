import axios from "axios";

export const getArtikelDetail = async (id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/admin/artikel/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching artikel:", error);
    throw new Error("Failed to fetch artikel.");
  }
};

export const updateArtikel = async (id, formData) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}/admin/artikel/${id}`,
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
};
