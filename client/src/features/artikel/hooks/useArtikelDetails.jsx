import { useState, useEffect } from "react";
import { getDetailsArtikel } from "../services/api.artikel.js";

export const useArtikelDetails = (id) => {
  const [loading, setLoading] = useState(false);
  const [artikel, setArtikel] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtikel = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getDetailsArtikel(id);
        setArtikel(response);
      } catch (error) {
        console.error("Error fetching artikel:", error);
        setError("Gagal memuat artikel");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchArtikel();
  }, [id]);

  return { artikel, loading, error };
};
