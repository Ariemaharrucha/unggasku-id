import { useState, useEffect } from "react";
import { getArtikel } from "../services/api.artikel.js";

export const useArtikelPage = (initialCategory) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getArtikel(selectedCategory);
        setArticles(response);
      } catch (err) {
        console.error(err);
        setError("Gagal mengambil artikel. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [selectedCategory]);

  const filteredArticles = articles.filter((item) =>
    item.judul.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    articles: filteredArticles,
    loading,
    error
  };
};
