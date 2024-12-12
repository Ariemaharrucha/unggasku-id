import { useNavigate } from "react-router-dom";
import useUser from "../stores/useStore.js";
import Cookies from "js-cookie";


export const useLogout = () => {
  const { clearUser } = useUser();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    Cookies.remove("accessToeken");
    clearUser();    
    navigate("/dashboard/login");
  };

  return { handleLogOut }
};
