import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import TopNav from "../components/TopNav";
const Dashboard = () => {
  return (
    <>
      <div className=" w-dvw grid-layout grid-rows-[auto_1fr_auto] grid-cols-[0px_1fr] md:grid-cols-[272px_1fr] transition-grid-cols duration-300 ease-in-out">
        <header className="header-area">
          <TopNav />
        </header>
        <nav className="sidebar-area max-sm:hidden">
          <SideBar />
        </nav>
        <main className="main-area py-10 px-6">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
