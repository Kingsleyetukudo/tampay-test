import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import TopNav from "../components/TopNav";
import { usePageTitle } from "../components/PageTitleContext";

const Dashboard = () => {
  const { isSidebarOpen, toggleSidebar } = usePageTitle();
  return (
    <div
      className={`grid-layout h-screen grid-rows-[auto_1fr_auto] transition-all duration-300 ease-in-out ${
        isSidebarOpen ? "md:grid-cols-[272px_1fr]" : "grid-cols-[0px_1fr]"
      }`}
    >
      <header className="header-area sticky top-0 z-10 bg-white shadow-md">
        <TopNav toggleSidebar={toggleSidebar} />
      </header>

      <nav
        className={`sidebar-area sticky top-0 h-screen overflow-y-auto bg-gray-100 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "w-[272px]" : "w-0 max-sm:hidden"
        }`}
      >
        <SideBar />
      </nav>

      <main className="main-area py-5 md:py-10 px-3 md:px-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
