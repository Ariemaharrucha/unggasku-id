import { Link } from "react-router-dom";
import { useGetArtikelDokter } from "../hooks/useGetArtikelDokter";

export const ArtikelDokterTable = () => {
  const { artikel, isLoading, error, handeDeleteArtikel } = useGetArtikelDokter();


  if (isLoading) {
    return <div className="flex items-center justify-center">
      <p>Loading...</p>
    </div>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }


  return (
    <section className=" ">
      <div className="relative overflow-x-auto">
        <div className="h-screen overflow-y-auto">
        <table className="text-left text-sm  text-gray-500 w-full">
          <thead className="bg-gray-50 text-sm uppercase sticky top-0 text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Judul
              </th>
              <th scope="col" className="px-6 py-3">
                author name
              </th>
              <th scope="col" className="px-6 py-3">
                Images
              </th>
              <th scope="col" className="px-6 py-3">
                Konten
              </th>
              <th scope="col" className="px-6 py-3">
                Kategori
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {artikel.map((artikel, index) => (
              <tr key={artikel.artikel_id} className="border-b bg-white">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap px-6 py-4">
                  {artikel.judul?.length > 20
                    ? `${artikel.judul.substring(0, 25)}...`
                    : artikel.judul || ""}
                </td>
                <td className="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap px-6 py-4">
                  {artikel.author_name?.length > 20
                    ? `${artikel.author_name.substring(0, 25)}...`
                    : artikel.author_name || ""}
                </td>
                <td className="px-6 py-4 overflow-hidden">
                  <div className="size-52">
                    <img
                      src={artikel.image_artikel}
                      alt={artikel.judul || "No Image"}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </td>
                <td className="block w-96 px-6 py-4">
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        artikel.konten?.length > 400
                          ? `${artikel.konten.substring(0, 425)}...`
                          : artikel.konten || "",
                    }}
                  ></div>
                </td>
                <td className="px-6 py-4">{artikel.kategori}</td>
                <td className="px-6 py-4">
                  {new Date(artikel.tanggal).toLocaleDateString("id-ID")}
                </td>
                <td className="px-6 py-4">{artikel.role}</td>
                <td className="space-x-4 px-6 py-4 ">
                  <div className="h-full w-full flex gap-4">
                    <Link
                      to={`/dashboard/dokter/artikel/edit/${artikel.artikel_id}`}
                      className="text-white p-2 rounded-md bg-primary-400"
                    >
                      Update
                    </Link>
                    <div
                      className="block cursor-pointer  text-white p-2 rounded-md bg-red-500"
                      onClick={() => handeDeleteArtikel(artikel.artikel_id)}
                    >
                      Delete
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </section>
  );
};
