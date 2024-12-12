import { Link } from "react-router-dom";
import { DashboardDokterLayout } from "../../../layouts/DashboardDokterLayout.jsx";
import Button from "../../../components/ui/Button.jsx";
import { useGetProfileDokter } from "../hooks/useGetProfileDokter.jsx";

export const DashboardDokter = () => {
  const { user, dokter, loading, error } = useGetProfileDokter();

  if (loading) {
    return (
      <DashboardDokterLayout>
        <div className="flex justify-center items-center h-screen">
          <p className="text-gray-500">Memuat data dokter...</p>
        </div>
      </DashboardDokterLayout>
    );
  }

  if (error) {
    return (
      <DashboardDokterLayout>
        <div className="flex justify-center items-center h-screen">
          <p className="text-red-500">Gagal memuat data dokter. Silakan coba lagi.</p>
        </div>
      </DashboardDokterLayout>
    );
  }

  return (
    <DashboardDokterLayout>
      <div className="flex justify-center items-center md:px-40 lg:h-[93vh] h-[94vh]">
        <div className="flex w-full bg-white shadow-xl rounded-xl">
          <div className="flex mx-auto justify-center items-center">
            <img
              src={user?.image || "/default-image.png"}
              alt="Doctor"
              className="w-80 h-80 object-cover object-top rounded-full border-4 border-black"
            />
          </div>

          <div className="w-1/2 p-10 space-y-6">
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <label className="block text-gray-700 text-lg font-bold mb-1">
                Nama Lengkap
              </label>
              <span className="text-gray-800 text-lg">{user?.username || "Dr. Radita "}</span>
            </div>

            {/* Nomor STR */}
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <label className="block text-gray-700 text-lg font-bold mb-1">
                Nomor STR
              </label>
              <span className="text-gray-800 text-lg">{dokter?.nomer_str || "123456789"}</span>
            </div>

            {/* Nomor Telepon */}
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <label className="block text-gray-700 text-lg font-bold mb-1">
                Nomor Telepon
              </label>
              <span className="text-gray-800 text-lg">{dokter?.nomer_telepon || "08123456789"}</span>
            </div>

            {/* Profesi */}
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <label className="block text-gray-700 text-lg font-bold mb-1">
                Spesialis
              </label>
              <span className="text-gray-800 text-lg">{dokter?.spesialis || "Hewan Dokter Unggas"}</span>
            </div>

            <div className="flex justify-end mt-6">
              <Link to={`/dashboard/dokter/profile/edit/${dokter.dokter_id}`}>
                <Button
                  variant="secondary"
                  className="px-8 py-3 bg-secondary-300 text-black text-lg font-bold rounded-full"
                >
                  Edit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardDokterLayout>
  );
};