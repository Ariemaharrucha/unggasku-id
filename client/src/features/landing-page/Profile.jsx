import { useState, useEffect, useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Navbar } from "../../components/shared/Navbar.jsx";
import { useParams } from "react-router-dom";
import { getUser } from "./services/api.profile.js";
import { editProfile } from "./services/api.profile.js";
import useUser from "../../stores/useStore.js";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

export const UserProfile = () => {
  const { id } = useParams();
  const idUser = parseInt(id);
  const {clearUser} = useUser();
  const [userData, setUserData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState(""); 
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await getUser(idUser);
        setUserData(response[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchUser();
  }, [idUser]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData((prev) => ({...prev, [name]: value}))
    console.log(value);
  }

  const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file); // Buat preview image dari file yang dipilih
    setPreviewImage(imageUrl);
    setUserData((prev) => ({ ...prev, image_profile: file })); // Simpan file ke state userData
  }
};

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
    } else {
      setPasswordError("");
    }
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (fileInputRef.current.files[0]) {
      console.log(fileInputRef.current.files[0]);
      
        formData.append("image_profile", fileInputRef.current.files[0]);
    } else {
        formData.append("image_profile", userData.image_profile);
    }

    formData.append("username", userData.username);
    formData.append("email", userData.email);

    if (password) {
        formData.append("password", password);
    }

    try {
        const response = await editProfile(idUser, formData);
        setUserData(response);
        setSuccessMessage("update succes")
        alert("Profil berhasil diperbarui!, silakan login ulang");
        clearUser();
        localStorage.removeItem("token")
        navigate('/login')
    } catch (error) {
        console.error("Error updating profile:", error);
        console.log(fileInputRef.current.files[0]);
        
        alert("Gagal memperbarui profil.");
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem('token');
    Cookies.remove('accessToeken');
    clearUser();
    navigate('/')
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
        
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl text-center font-bold text-gray-800 mb-8">
          Selamat Datang di Halaman Akun Anda
        </h1>
        {/* image */}
        <div className="flex flex-col items-center mb-8">
        <div className="size-36 rounded-full overflow-hidden border-2 border-gray-300 mb-4">
          <img
            src={
              previewImage ||userData?.image_profile ||
              "https://i.pinimg.com/736x/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
            }
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
          <button
            className="text-primary-500 hover:underline focus:outline-none"
            onClick={handleFileInputClick}
          >
            Ganti Gambar Profil
          </button>
          <input
            type="file"
            className="w-full p-3 mt-2 border rounded-md hidden"
            name="image_profile"
            ref={fileInputRef}
            accept=".jpeg,.jpg,.png"
            onChange={handleFileChange}
          />
        </div>
        {/* usernname */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* email */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* password */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Kata Sandi
          </label>
          <p className="text-sm">
            <span className="text-red-500 font-bold">Note: </span>
            <span>Password yang lama akan diganti</span>
          </p>
          <div className="flex items-center mt-2">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={togglePasswordVisibility}
              className="ml-2 text-gray-500 focus:outline-none"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
          {passwordError && (
            <p className="text-red-500 text-sm mt-2">{passwordError}</p>
          )}
        </div>
          
        <div className="flex justify-between">
          <button className="text-white bg-red-500  px-4 py-2 rounded-md" onClick={handleLogOut}>Log out</button>
          <button
          onClick={handleSubmit}
            className="px-4 py-2 bg-primary-500 text-white font-semibold rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
          >
            Simpan Perubahan
          </button>
        </div>
        {successMessage && (
          <p className="text-green-500 text-sm mt-2">{successMessage}</p>
        )}
      </div>
    </div>
  );
};
