import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../services/api.register.js";

const useRegister = () => {
  const [isLoading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      await registerUser(data.username, data.email, data.password);
      reset();
      setSuccessMessage("Pendaftaran berhasil, silakan Anda login.");
    } catch (error) {
      console.log("Error captured:", error.message);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const password = watch("password");

  return {
    isLoading,
    successMessage,
    errorMessage,
    register,
    handleSubmit,
    errors,
    password,
    onSubmit,
  };
};

export default useRegister;
