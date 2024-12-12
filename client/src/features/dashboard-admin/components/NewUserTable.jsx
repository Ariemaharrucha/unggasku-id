// eslint-disable-next-line react/prop-types
export const NewUserTable = ({data = []}) => {
  return (
    <div className="relative overflow-x-auto w-full max-h-96 overflow-y-auto">
      <table className="text-left text-sm text-gray-500 w-full">
        <thead className="bg-gray-50 text-sm uppercase text-gray-700 sticky top-0">
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
            {/* <th scope="col" className="px-6 py-3">
              Tipe
            </th> */}
          </tr>
        </thead>
        <tbody>
          {data && data.map((user, index) => (
            <tr key={index} className="border-b bg-white">
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">
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
              {/* <td className=" px-6 py-4 ">
                <p>{user.role}</p>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
