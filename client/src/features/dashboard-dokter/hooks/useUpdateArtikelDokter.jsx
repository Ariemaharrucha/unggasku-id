import { useState, useEffect } from "react";
import { getArtikelDokterDetail, updateArtikel } from "../services/api.crud.artikeldokter";
import { useNavigate } from "react-router-dom";

export const useUpdateArtikelDokter = (id) => {
  const [artikel, setArtikel] = useState(null);
  const [formData, setFormData] = useState({
    judul: "",
    author_name: "",
    kategori: "",
    tanggal: "",
    konten: "",
    image_artikel: null,
  });
  const [content, setContent] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtikel = async () => {
      try {
        const response = await getArtikelDokterDetail(id);
        if (response.data && response.data.length > 0) {
          const artikelData = response.data[0];
          const formattedDate = artikelData.tanggal
          ? new Date(artikelData.tanggal).toLocaleDateString("en-CA")
          : ""; 
          setArtikel(artikelData);
          setFormData({
            judul: artikelData.judul || "",
            author_name: artikelData.author_name || "",
            kategori: artikelData.kategori || "",
            tanggal: formattedDate || "",
            konten: artikelData.konten || "",
            image_artikel: artikelData.image_artikel || null,
          });
          setContent(artikelData.konten);
          setImagePreview(artikelData.image_artikel);
        } else {
          setError("Artikel tidak ditemukan.");
        }
      } catch (err) {
        setError(err.message || "Gagal mengambil data artikel.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchArtikel();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image_artikel: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleContentChange = (value) => {
    setContent(value);
    setFormData((prev) => ({ ...prev, konten: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isConfirmed = window.confirm(
      "Apakah Anda yakin ingin mengubah artikel ini?"
    );
    if (!isConfirmed) return;
    setIsLoading(true);
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        if (key === "image_artikel" && formData[key] instanceof File) {
          formDataToSend.append(key, formData[key]);
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }
      await updateArtikel(id, formDataToSend);
      setSuccessMessage("Artikel berhasil diperbarui.");
      navigate("/dashboard/dokter/artikel");
    } catch (err) {
      setError(err.message || "Terjadi kesalahan saat memperbarui artikel.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    artikel,
    formData,
    isLoading,
    successMessage,
    error,
    imagePreview,
    handleInputChange,
    handleImageChange,
    handleContentChange,
    handleSubmit,
  };
};
