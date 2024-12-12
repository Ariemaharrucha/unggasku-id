import axios from "axios";

export const getUser = async (id) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/profile/${id}`);
      return response.data.data;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch users.");
    }
};

export const editProfile = async (id, formData) => {
  try {
      const response = await axios.put(
          `${import.meta.env.VITE_API_URL}/profile/${id}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
      );
      return response.data.data;
  } catch (error) {
      console.error(error);
      throw new Error("Failed to update profile.");
  }
};
