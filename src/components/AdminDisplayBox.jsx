import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const AdminDisplay = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch random users
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
      .then((response) => response.json())
      .then((data) => {
        const formattedAdmins = data.results.map((user) => ({
          id: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
          username: `@${user.login.username}`,
          image: user.picture.medium,
        }));
        setAdmins(formattedAdmins);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching admins:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-brandColor-1 text-lg font-semibold">Active Admins</p>
        <span className="flex items-center text-active-color text-xs font-semibold cursor-pointer">
          <p>View all</p>

          <ChevronRight className="text-active-color text-xs w-[17px]" />
        </span>
      </div>

      <div className="bg-white shadow-sm py-6 px-6 md:px-10 rounded-3xl flex  justify-between md:justify-normal gap-6 flex-wrap">
        {loading ? (
          <p className="text-gray-500 text-sm">Loading admins...</p>
        ) : (
          admins.map((admin) => (
            <div
              key={admin.id}
              className="flex flex-col justify-center items-center gap-2"
            >
              <div className="w-[50px] h-[50px]">
                <img
                  src={admin.image}
                  alt={admin.name}
                  className="bg-[#FBEAE9] text-[#D42620] rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1 text-center">
                <p className="text-brandColor-1 text-xs font-bold">
                  {admin.name}
                </p>
                <p className="text-active-color text-xs">{admin.username}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDisplay;
