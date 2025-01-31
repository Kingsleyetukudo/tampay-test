import SideBar from "../components/SideBar";
import TopNav from "../components/TopNav";
const Dashboard = () => {
  return (
    <>
      <div>
        <h1 className="text-5xl font-bold">Dashboard</h1>
        <SideBar />
        <TopNav />
      </div>
    </>
  );
};

export default Dashboard;
