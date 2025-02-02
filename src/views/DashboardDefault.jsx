import { useEffect } from "react";
import AccountDetailsBox from "../components/AccountDetailsBox";
import { usePageTitle } from "../components/PageTitleContext";
import RecentTransactions from "../components/RecentTransactionsBox";
import AdminDisplay from "../components/AdminDisplayBox";
import RateExchange from "../components/RateBox";
import TransactionVolume from "../components/TransactionsVolume";

const DashboardDefault = () => {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle("Dashboard");
  }, []);
  return (
    <>
      <div className="flex flex-col gap-8">
        <section>
          <AccountDetailsBox />
        </section>
        <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_450px] justify-between gap-8 ">
          <section>
            <TransactionVolume />
          </section>
          <section>
            <RecentTransactions />
          </section>
        </div>
        <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_450px] justify-between gap-8 ">
          <section>
            <AdminDisplay />
          </section>
          <section>
            <RateExchange />
          </section>
        </div>
      </div>
    </>
  );
};

export default DashboardDefault;
