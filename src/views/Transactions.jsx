import { useEffect } from "react";
import { usePageTitle } from "../components/PageTitleContext";
import AllTransactionsTable from "../components/AllTransactionsTable";

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
      </div>
    </>
  );
};

export default Transactions;
