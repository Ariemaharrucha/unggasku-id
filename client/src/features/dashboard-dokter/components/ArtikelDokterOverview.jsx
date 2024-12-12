import { Link } from "react-router-dom";

import { FiPlusCircle } from "react-icons/fi";
import { DashboardDokterLayout } from "../../../layouts/DashboardDokterLayout.jsx";
import Button from "../../../components/ui/Button.jsx";
import { ArtikelDokterTable } from "./ArtikelDokterTable.jsx";

export const ArtikelDokterOverview = () => {
  return (
    <DashboardDokterLayout>
      <main className="max-w-6xl mx-auto">
        <section className="sticky top-0 z-[2] flex items-center justify-between bg-white py-2 ">
          <div>
            <h3 className="text-xl">Artikel Dokter</h3>
            <p className="text-sm text-gray-600">Kelola dan lihat artikel kesehatan yang relevan untuk pasien dan pengobatan.</p>
          </div>
          <Link to="/dashboard/dokter/artikel/create">
            <Button variant="secondary">
              <FiPlusCircle size={24} />
              Buat Artikel
            </Button>
          </Link>
        </section>
        <section className="mt-4">
          <ArtikelDokterTable />
        </section>
      </main>
    </DashboardDokterLayout>
  );
};