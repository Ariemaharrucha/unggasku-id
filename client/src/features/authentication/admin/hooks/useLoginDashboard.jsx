import { useState } from "react";
import { apiLoginDashboard } from "../services/api.login.dashboard.js";
import { jwtDecode } from "jwt-decode";
import useUser from "../../../../stores/useStore.js";
import { useNavigate } from "react-router-dom";

const useLoginAdmin = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const togglePassword = () => setShowPassword(!showPassword);

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setErrorMessage("");
      const data = await apiLoginDashboard(email, password);
      const token = data.accessToken;
      const decoded = jwtDecode(token);
      localStorage.setItem("token", token);
      setUser(decoded);

      if (decoded.role === "dokter") {
        navigate("/dashboard/dokter");
      } else {
        navigate("/dashboard/admin");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Login gagal, periksa email dan password Anda.");
    } finally {
      setLoading(false);
    }
  };

  return {
    isLoading,
    showPassword,
    email,
    password,
    errorMessage,
    handleEmailChange,
    handlePasswordChange,
    togglePassword,
    onSubmitLogin,
  };
};

export default useLoginAdmin;
