import { useState } from "react";
import { createArtikelDokter } from "../services/api.crud.artikeldokter";
import useUser from "../../../stores/useStore";
import { useNavigate } from "react-router-dom";

const useAddArtikelDokter = () => {
  const { user } = useUser();
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const handleChange = (value) => {
    setContent(value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const onSubmit = async (data) => {
    if (!user || !user.id) {
      throw new Error("User tidak bisa menambahkan artikel");
    }

    try {
      setIsLoading(true);
      setError(null);
      setSuccessMessage(null);

      const formData = new FormData();
      formData.append("judul", data.judul);
      formData.append("author_name", data.author_name);
      formData.append("kategori", data.kategori);
      formData.append("konten", content);
      formData.append("image_artikel", data.image_artikel[0]);
      formData.append("tanggal", data.tanggal);
      formData.append("author_id", user.id);
      formData.append("role", user.role);

      await createArtikelDokter(formData);

      setSuccessMessage("Artikel berhasil ditambahkan!");
      setContent("");
      setImagePreview(null);
      setTimeout(() => {
        navigate("/dashboard/dokter/artikel");
      }, 2000);
    } catch (err) {
      setError(err.message || "Gagal menambahkan artikel");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    content,
    setContent,
    isLoading,
    error,
    successMessage,
    handleChange,
    onSubmit,
    imagePreview,
    handleImageChange,
  };
};

export default useAddArtikelDokter;
