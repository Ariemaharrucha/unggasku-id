import { useEffect, useState } from "react";
import { IoNewspaper } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { LuDoorOpen } from "react-icons/lu";
import axios from "axios";

export const UserTable = () => {
  const [listUser, setListUser] = useState([]);
  const [deleting, setDeleting] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/admin/user`
        );
        // console.log(response.data.data);
        setListUser(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllUser();
  }, []);

  function handleDelete() {}

  return (
    <section>
      <div className="relative overflow-x-auto">
        <table className="text-left text-sm text-gray-500 w-full">
          <thead className="bg-gray-50 text-sm uppercase text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center px-6 py-4">
                  <div className="flex justify-center items-center py-4">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
                  </div>
                </td>
              </tr>
            ) : listUser.length > 0 ? (
              listUser.map((user, index) => {
                return (
                  <tr key={user.user_id || index} className="border-b bg-white">
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-4">
                      <div className="size-10 overflow-hidden rounded-full">
                        <img
                          src={
                            user.image_profile ||
                            `https://i.pinimg.com/736x/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg`
                          }
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {user.username}
                    </td>
                    <td className="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap px-6 py-4">
                      {user.email.length > 20
                        ? `${user.email.substring(0, 25)}...`
                        : user.email}
                    </td>
                    <td className="px-6 py-4">
                      {new Date(user.created_at).toLocaleDateString("id-ID")}
                    </td>
                    <td className="space-x-4 px-6 py-4">
                      <div className="h-full w-full flex gap-4">
                        <LuDoorOpen className="cursor-pointer"/>
                        <IoSettingsSharp className="cursor-pointer"/>
                        <IoNewspaper className="cursor-pointer"/>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" className="text-center px-6 py-4">
                  No user available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
