import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addDokter } from "../services/api.crud.dokter.js";

export const useAddDokterForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const onSubmit = async (data) => {
    try {
      setErrorMessage("");
      setSuccessMessage("");
      setLoading(true);

      const formData = new FormData();
      formData.append("username", data.username);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("image_profile", data.image_profile[0]);
      formData.append("nomer_str", data.nomer_str);
      formData.append("nomer_telepon", data.nomer_telepon);
      formData.append("spesialis", data.spesialis);
      formData.append("pengalaman", data.pengalaman);
      formData.append("jam_kerja", data.jam_kerja);
      formData.append("alumni", data.alumni);
      formData.append("tempat_praktek", data.tempat_praktek);

      await addDokter(formData);
      setSuccessMessage("Dokter berhasil ditambahkan!");
      setImagePreview(null);
      setTimeout(() => {
        navigate("/dashboard/admin/dokter");
      }, 2000);
    } catch (error) {
      console.error(error);
      setErrorMessage("Gagal menambahkan dokter.");
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    reset,
    successMessage,
    errorMessage,
    isLoading,
    imagePreview,
    handleImageChange,
    onSubmit,
  };
};
