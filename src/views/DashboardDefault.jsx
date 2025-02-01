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
      <div className="flex flex-col">
        <section>
          <AccountDetailsBox />
        </section>
        <section>
          <RecentTransactions />
        </section>
        <section>
          <AdminDisplay />
        </section>
        <section>
          <RateExchange />
        </section>
        <section>
          <TransactionVolume />
        </section>
      </div>
    </>
  );
};

export default DashboardDefault;
