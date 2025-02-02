import { useEffect } from "react";
import { usePageTitle } from "../components/PageTitleContext";
import AllTransactionsTable from "../components/AllTransactionsTable";
// import TransactionTable from "../components/Table";

const Transactions = () => {
  //   const [pageTitle, setPageTile] = useState("Transactions");

  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle("Transactions");
  }, []);
  return (
    <>
      <div>
        <AllTransactionsTable />
        {/* <TransactionTable /> */}
      </div>
    </>
  );
};

export default Transactions;
