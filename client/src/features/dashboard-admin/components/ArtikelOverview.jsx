import { Link } from "react-router-dom";
import { ArtikelTable } from "./ArtikelTable.jsx";
import { FiPlusCircle } from "react-icons/fi";
import { DashboardAdminLayout } from "../../../layouts/DashboardAdminLayout.jsx";
import Button from "../../../components/ui/Button.jsx";

export const ArtikelOverview = () => {
  return (
    <DashboardAdminLayout>
      <main className="max-w-6xl">
        <section className="sticky top-0 z-[2] flex items-center justify-between bg-white py-2 ">
          <div>
            <h3 className="text-xl">Artikel</h3>
          </div>
          <Link to="/dashboard/admin/artikel/create">
            <Button variant="secondary">
              <FiPlusCircle size={24} />
              Buat Artikel
            </Button>
          </Link>
        </section>
        <section className="mt-4">
          <ArtikelTable></ArtikelTable>
        </section>
      </main>
    </DashboardAdminLayout>
  );
};