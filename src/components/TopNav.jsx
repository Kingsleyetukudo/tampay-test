import { Bell } from "lucide-react";
const TopNav = () => {
  return (
    <>
      <div className="flex items-center justify-between py-6 px-14">
        <div>
          <h1 className="text-xl tracking-[0.5em] uppercase font-bold">
            Dashboard
          </h1>
        </div>
        <div className="bg-brandColor-1 w-9 h-9 p-2 rounded-full flex items-center justify-center  relative">
          <Bell className="text-text-color" />
          <span className="absolute w-4 h-4  text-text-color flex items-center justify-center  -top-1 text-sm -right-1 rounded-full  bg-brandColor-2">
            4
          </span>
        </div>
      </div>
    </>
  );
};

export default TopNav;
