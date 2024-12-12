import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Beranda } from "../features/landing-page/Beranda.jsx";
import { Login } from "../features/authentication/user/components/Login.jsx";
import { Register } from "../features/authentication/user/components/Register.jsx";
import { About } from "../features/landing-page/About.jsx";
import { Contact } from "../features/landing-page/Contact.jsx";
import { Layanan } from "../features/landing-page/Layanan.jsx";
import { UserProfile } from "../features/landing-page/Profile.jsx";
import { ArtikelPage } from "../features/artikel/components/ArtikelPage.jsx";
import { ArtikelDetails } from "../features/artikel/components/ArtikelDetails.jsx";
import { DashboardAdmin } from "../features/dashboard-admin/components/index.dashboard.admin.jsx";
import { ArtikelOverview } from "../features/dashboard-admin/components/ArtikelOverview.jsx";
import { FormAddArtikel } from "../features/dashboard-admin/components/FormAddArtikel.jsx";
import { FormEditArtikel } from "../features/dashboard-admin/components/FormEditArtikel.jsx";
import { DashboardDokter } from "../features/dashboard-dokter/components/index.dasboard.dokter.jsx";
import { ArtikelDokterOverview } from "../features/dashboard-dokter/components/ArtikelDokterOverview.jsx";
import { FormDokterAddArtikel } from "../features/dashboard-dokter/components/FormDokterAddArtikel.jsx";
import { FormDokterEditArtikel } from "../features/dashboard-dokter/components/FormDokterEditArtikel.jsx";
import { FormDokterEditProfile } from "../features/dashboard-dokter/components/FormDokterEditProfile.jsx";
import { DokterChat } from "../features/dashboard-dokter/components/DokterChat.jsx";
import { Konsultasi } from "../features/konsultasi/components/Konsultasi.jsx";
import { Chatkonsultasi } from "../features/konsultasi/components/ChatKonsultasi.jsx";
import { DokterOverview } from "../features/dashboard-admin/components/DokterOverview.jsx";
import { UserOverview } from "../features/dashboard-admin/components/UserOverview.jsx";
import { FormAddDokter } from "../features/dashboard-admin/components/FormAddDokter.jsx";
import { LoginAdmin } from "../features/authentication/admin/components/LoginAdmin.jsx";
import { ProtectedRoute } from "../middleware/ProtectedRoute.jsx";



export const AppRouter = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Beranda/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/tentang-kami" element={<About/>}></Route>
      <Route path="/kontak-kami" element={<Contact/>}></Route>
      <Route path="/layanan" element={<Layanan/>}></Route>
      <Route path="/artikel" element={<ArtikelPage/>}></Route>
      <Route path="/artikel/:id" element={<ArtikelDetails/>}></Route>

      <Route element={<ProtectedRoute allowedRoles={['user']}/>}>
        <Route path="/profile/:id" element={<UserProfile/>}></Route>
        <Route path="/layanan/konsultasi" element={<Konsultasi/>}></Route>
        <Route path="/layanan/konsultasi/chat/:konsultasiId" element={<Chatkonsultasi/>}></Route>
      </Route>

      {/* dashboard login */}
      <Route path="/dashboard/login" element={<LoginAdmin/>}></Route>

      {/* dasboard admin */}
      <Route element={<ProtectedRoute allowedRoles={['admin']}/>}>
        <Route path="/dashboard/admin" element={<DashboardAdmin/>}></Route>
        <Route path="/dashboard/admin/artikel" element={<ArtikelOverview/>}></Route>
        <Route path="/dashboard/admin/artikel/create" element={<FormAddArtikel/>}></Route>
        <Route path="/dashboard/admin/artikel/edit/:id" element={<FormEditArtikel/>}></Route>
        <Route path="/dashboard/admin/dokter" element={<DokterOverview/>}></Route>
        <Route path="/dashboard/admin/dokter/create" element={<FormAddDokter/>}></Route>
        <Route path="/dashboard/admin/users" element={<UserOverview/>}></Route>
      </Route>

      {/* dasboard dokter */}
      <Route element={<ProtectedRoute allowedRoles={['dokter']}/>}>
        <Route path="/dashboard/dokter" element={<DashboardDokter/>}></Route>
        <Route path="/dashboard/dokter/artikel" element={<ArtikelDokterOverview/>}></Route>
        <Route path="/dashboard/dokter/artikel/create" element={<FormDokterAddArtikel/>}></Route>
        <Route path="/dashboard/dokter/artikel/edit/:id" element={<FormDokterEditArtikel/>}></Route>
        <Route path="/dashboard/dokter/chat" element={<DokterChat/>}></Route>
        <Route path="/dashboard/dokter/profile/edit/:id" element={<FormDokterEditProfile/>}></Route>
      </Route>


    </Routes>
  </BrowserRouter>
  )
};
