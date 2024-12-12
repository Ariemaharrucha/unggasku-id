import axios from 'axios';

export const getArtikel = async (kategori) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/artikel/kategori/${kategori}`);
      return response.data.data;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch users.");
    }
};

export const getDetailsArtikel = async (id) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/artikel/${id}`);
    return response.data.data[0];
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users.");
  }
};