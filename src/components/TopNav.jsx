import { Bell, Menu } from "lucide-react";
import { usePageTitle } from "./PageTitleContext";
const TopNav = () => {
  const { pageTitle, toggleSidebar } = usePageTitle();
  return (
    <>
      <div className="flex  items-center justify-between py-6 px-6 md:px-14 shadow-md">
        <div className="flex gap-5 items-center">
          <Menu onClick={toggleSidebar} />
          <h1 className=" text-lg md:text-xl tracking-[0.2em] md:tracking-[0.5em] font-normal uppercase">
            {pageTitle}
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
