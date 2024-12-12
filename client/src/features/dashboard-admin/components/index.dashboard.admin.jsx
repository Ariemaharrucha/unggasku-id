import React, { useEffect, useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { LuFiles } from "react-icons/lu";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { NewUserTable } from "./NewUserTable.jsx";
import { DashboardAdminLayout } from "../../../layouts/DashboardAdminLayout.jsx";
import axios from "axios";

export const DashboardAdmin = () => {
  const [totalArtikel, setTotalArtikel] = useState(0);
  const [totalDokter, setTotalDokter] = useState(0);
  const [totalUser, setTotalUser] = useState(0);
  const [newUsers, setNewUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const [
          artikelResponse,
          dokterResponse,
          userResponse,
          newUsersResponse,
        ] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/admin/artikel/total`),
          axios.get(`${import.meta.env.VITE_API_URL}/admin/dokter/total`),
          axios.get(`${import.meta.env.VITE_API_URL}/admin/user/total`),
          axios.get(`${import.meta.env.VITE_API_URL}/admin/new-user`),
        ]);

        setTotalArtikel(artikelResponse.data.data[0].total_artikel);
        setTotalDokter(dokterResponse.data.data[0].total);
        setTotalUser(userResponse.data.data[0].total);
        setNewUsers(newUsersResponse.data.data);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <DashboardAdminLayout>
      <main className="max-w-6xl w-full">
        <section className="sticky top-0 z-[2] flex items-center justify-between bg-white py-2">
          <div className="flex items-center gap-3">
            <div className="bg-secondary-300 flex justify-center items-center p-2 rounded-lg">
              <AiOutlineDashboard size={24} />
            </div>
            <h3 className="text-xl font-semibold">Dashboard</h3>
          </div>
        </section>

        <section className="mt-6">
          <div className="grid grid-cols-12 gap-6">
            <StatisticCard
              title="Artikel"
              count={totalArtikel}
              icon={<LuFiles />}
            />
            <StatisticCard
              title="Dokter"
              count={totalDokter}
              icon={<FaUserDoctor />}
            />
            <StatisticCard title="User" count={totalUser} icon={<FaUser />} />
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-center gap-3">
            <div className="bg-secondary-300 flex justify-center items-center p-2 rounded-lg">
              <FaUser size={24} />
            </div>
            <h3 className="text-xl font-semibold">User Terbaru</h3>
          </div>
          {/* tabel new user */}
          <section className="mt-4 ">
            {loading ? (
              <div className="flex justify-center items-center py-4">
                <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
              </div>
            ) : newUsers.length > 0 ? (
              <NewUserTable data={newUsers} />
            ) : (
              <p className="text-center py-4 text-gray-500">
                No data available.
              </p>
            )}
          </section>
        </section>
      </main>
    </DashboardAdminLayout>
  );
};

// eslint-disable-next-line react/prop-types
const StatisticCard = ({ title, count, icon, iconSize = 70, loading }) => {
  const iconWithSize = React.cloneElement(icon, { size: iconSize });
  return (
    <div className="col-span-4 py-4 px-10 bg-secondary-300 rounded-2xl flex items-center justify-around h-32">
      <div className="w-2/3">
        <p className="text-lg font-semibold text-slate-600">Total {title}</p>
        {loading ? (
          <div className="animate-pulse h-6 bg-gray-300 rounded-md w-20 my-2"></div>
        ) : (
          <p className="text-2xl py-2 font-semibold">{count}</p>
        )}
      </div>
      <div className="w-auto flex justify-center">{iconWithSize}</div>
    </div>
  );
};
