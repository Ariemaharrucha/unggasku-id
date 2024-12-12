import { DashboardAdminLayout } from "../../../layouts/DashboardAdminLayout.jsx";
import { UserTable } from "./UserTable.jsx";


export const UserOverview = () => {
  return (
    <DashboardAdminLayout>
      <main className="max-w-6xl">
        <section className="sticky top-0 z-[2] flex items-center justify-between bg-white py-2 ">
          <div>
            <h3 className="text-xl">Daftar User</h3>
          </div>
        </section>
        <section className="mt-4">
          <UserTable/>
        </section>
      </main>
    </DashboardAdminLayout>
  );
};