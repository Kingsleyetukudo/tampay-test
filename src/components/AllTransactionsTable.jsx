import { Search } from "lucide-react";
import Dropdown from "./FilterDropdown";
import { useState } from "react";

const AllTransactionsTable = () => {
  const [search, setSearch] = useState();
  const options = [
    "Bank",
    "Transfer",
    "Debit Card",
    "Successful",
    "Pending",
    "Date",
    "Credit",
    "Debit",
  ];
  return (
    <>
      <div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
            <div className="md:w-1/2 flex gap-4 flex-col md:flex-row">
              <p className="text-brandColor-1 text-lg font-semibold">
                All Transactions
              </p>
              <span className=" md:w-[350px] flex items-center gap-2 bg-white shadow-sm px-4 py-2 rounded-xl">
                <Search className="text-active-color" size="18px" />
                <input
                  type="text"
                  placeholder="Search by Tran ID and Account Number"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full text-brandColor-1 text-xs outline-none p-0 border-none bg-transparent focus:ring-0"
                />
              </span>
            </div>
            <div className="flex gap-4 justify-between md:justify-normal">
              <button className="flex items-center gap-2 bg-white shadow-sm px-4 py-2 rounded-xl text-active-color text-xs font-semibold">
                {/* <Earth className="text-active-color text-xs w-[17px]" /> */}
                <span>Export Transactions</span>
                {/* <ChevronRight className="text-active-color text-xs w-[17px]" /> */}
              </button>
              <Dropdown options={options} />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default AllTransactionsTable;
