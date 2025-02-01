import { useEffect } from "react";
import { usePageTitle } from "../components/PageTitleContext";

const Transactions = () => {
  //   const [pageTitle, setPageTile] = useState("Transactions");

  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle("Transactions");
  }, []);
  return (
    <>
      <div>
        <h1 className="text-5xl font-bold">Transaction</h1>
      </div>
    </>
  );
};

export default Transactions;
