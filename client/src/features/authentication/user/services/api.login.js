import axios from "axios";

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
      email,
      password,
    }, {withCredentials: true});
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users.");
  }
};
