import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../services/api.login.js";
import {jwtDecode} from "jwt-decode";
import useUser from "../../../../stores/useStore.js";

const useLogin = () => {
  const { setUser } = useUser();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.from) {
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setErrorMessage("");
      const data = await loginUser(email, password);
      const token = data.accessToken;
      const decoded = jwtDecode(token);

      setUser(decoded);
      localStorage.setItem("token", token);

      const redirectPath = location.state?.from?.pathname || "/";
      navigate(redirectPath);
    } catch (error) {
      console.log(error);
      setErrorMessage("Login gagal, periksa email dan password Anda.");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const togglePassword = () => setShowPassword(!showPassword);

  return {
    email,
    password,
    showPassword,
    isLoading,
    errorMessage,
    handleEmailChange,
    handlePasswordChange,
    togglePassword,
    onSubmitLogin,
  };
};

export default useLogin;
