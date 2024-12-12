import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const DokterTable = () => {
  const [dokters, setDokters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDokter = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/admin/dokter`
        );
        setDokters(response.data.data);
      } catch (error) {
        console.error("Error fetching dokters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDokter();
  }, []);

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm("Apakah Anda yakin ingin menghapus dokter ini?");
    if (!isConfirmed) return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/admin/dokter/${id}`);
      setDokters((dokter) => dokter.filter((item) => item.dokter_id !== id))
    } catch (error) {
      console.error("Error deleting dokter:", error);
      throw new Error("Failed to delete dokter.");
    }
  }

  return (
    <section className="">
      <div className="relative overflow-x-auto">
        <table className="text-left text-sm text-gray-500 w-full">
          <thead className="bg-gray-50 text-sm uppercase text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Nama Dokter
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Nomor STR
              </th>
              <th scope="col" className="px-6 py-3">
                Nomor Telepon
              </th>
              <th scope="col" className="px-6 py-3">
                Spesialis
              </th>
              <th scope="col" className="px-6 py-3">
                Alumni
              </th>
              <th scope="col" className="px-6 py-3">
                Tempat Praktek
              </th>
              <th scope="col" className="px-6 py-3">
                Jam Kerja
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {loading ? (
            <tbody>
              <tr>
                <td colSpan="10" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {dokters.length > 0 ? (
                dokters.map((dokter, index) => (
                  <tr key={dokter.dokter_id} className="border-b bg-white">
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap px-6 py-6 flex items-center gap-4">
                      <div className="size-10 overflow-hidden rounded-full">
                        <img src={dokter?.image_profile} alt="" />
                      </div>
                      <div>
                        {dokter?.nama_dokter.length > 20
                          ? `${dokter.nama_dokter.substring(0, 25)}...`
                          : dokter?.nama_dokter}
                      </div>
                    </td>
                    <td className="px-6 py-4 ">{dokter.email}</td>
                    <td className="px-6 py-4">{dokter.nomer_str}</td>
                    <td className="px-6 py-4">{dokter.nomer_telepon}</td>
                    <td className="px-6 py-4">{dokter.spesialis}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {dokter.alumni}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {dokter.tempat_praktek}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {dokter.jam_kerja}
                    </td>
                    <td className="space-x-4 px-6 py-4">
                      <Link
                        to={`/dashboard/admin/dokter/edit/${dokter?.dokter_id}`}
                        className="text-white p-2 rounded-md bg-primary-400"
                      >
                        Update
                      </Link>
                      <a
                        href="#"
                        className="text-white p-2 rounded-md bg-red-500"
                        onClick={() => handleDelete(dokter.dokter_id)}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="text-center py-4">
                    No data available.
                  </td>
                </tr>
              )}
            </tbody>
          )}
        </table>
      </div>
    </section>
  );
};
