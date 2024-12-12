import { Link } from "react-router-dom";
import Button from "../components/ui/Button.jsx";
import { IoNewspaper } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { useLogout } from "../utils/logOut.jsx";

export const DashboardDokterLayout = ({children}) => {
  const {handleLogOut} = useLogout();

  return (
    <div className="flex min-h-screen">
      <aside className="flex w-[240px] flex-col justify-between bg-gradient-to-b from-primary-50/50 to-violet-50/50 p-6">
        <section className="space-y-2">
          <div className="mb-4 px-3 py-2 text-base font-bold text-slate-600">
            Unggasku.id
          </div>
        <Menu label={'Home'} to={'/dashboard/dokter'} icon={<IoMdHome size={24}/>} />
        <Menu label={'Artikel'} to={'/dashboard/dokter/artikel'} icon={<IoNewspaper size={24}/>} />
        <Menu label={'Chat'} to={'/dashboard/dokter/chat'} icon={<FaUserDoctor size={24}/>} />
        </section>
        <div>
          <Button variant="secondary" className={"flex justify-center w-full"} onClick={handleLogOut}>
            Logout
          </Button>
        </div>
      </aside>
      <main className="w-[calc(100vw-240px)] ">
        <div className="m-auto">
            {children}
        </div>
      </main>
    </div>
  );
};

const Menu = ({to, label, icon}) => {
    return (
        <Link
        to={to}
        className="flex items-center text-md gap-3 rounded-lg bg-secondary-300 py-2.5 px-4 font-medium transition duration-200 hover:bg-secondary-400"
      >
        {icon || ' '}
        {label}
      </Link>
    )
}