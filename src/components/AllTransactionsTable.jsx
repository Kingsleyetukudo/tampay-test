import {
  ChevronLeft,
  ChevronRight,
  EllipsisVertical,
  MoveDown,
  MoveUp,
  Search,
} from "lucide-react";
import Dropdown from "./FilterDropdown";
import transactionsData from "./TransactionsData";
import { useState } from "react";

const AllTransactionsTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;
  const [isOpen, setIsOpen] = useState(false);
  const tableOptions = ["View", "Share"];
  const options = [
    "Transfer",
    "Debit Card",
    "Credit",
    "Debit",
    "Pending",
    "Successful",
  ];

  const toggleAction = (id) => {
    setIsOpen(isOpen === id ? false : id);
  };

  const handleOptionSelect = (option) => {
    console.log(option);
    setFilter(option); // Update the selected option
  };

  // Filter & Search Functionality
  const filteredTransactions = transactionsData.filter((txn) => {
    const matchesSearch =
      (txn.id && txn.id.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (txn.accountNumber &&
        txn.accountNumber.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFilter =
      filter === "All" ||
      txn.paymentMethod === filter ||
      txn.status === filter ||
      txn.paymentType === filter;
    return matchesSearch && matchesFilter;
  });

  // Pagination Logic
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );
  const totalPages = Math.ceil(
    filteredTransactions.length / transactionsPerPage
  );

  // Export CSV function
  const exportCSV = () => {
    const headers = [
      "Transaction ID",
      "Account",
      "Date",
      "Bank",
      "Type",
      "Currency",
      "Method",
      "Status",
      "Amount",
    ];
    const rows = transactionsData.map((txn) => [
      txn.id,
      txn.accountNumber,
      txn.date,
      txn.bank,
      txn.paymentType,
      txn.currency,
      txn.paymentMethod,
      txn.status,
      txn.amount,
    ]);

    let csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((e) => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "transactions.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-8">
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-brandColor-1 text-xs outline-none p-0 border-none bg-transparent focus:ring-0"
                />
              </span>
            </div>
            <div className="flex gap-4 justify-between md:justify-normal">
              <button
                onClick={exportCSV}
                className="flex items-center gap-2 bg-white shadow-sm px-4 py-2 rounded-xl text-active-color text-xs font-semibold"
              >
                <span>Export Transactions</span>
              </button>
              <Dropdown options={options} onFilter={handleOptionSelect} />
            </div>
          </div>
        </div>
        <div className="mb-8 grid grid-cols-1 gap-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th>Transaction ID</th>
                  <th className="p-3 border">Account Number/Bank</th>
                  <th className="p-3 border">Date</th>
                  <th className="p-3 border">Bank</th>
                  <th className="p-3 border">Payment Type</th>
                  <th className="p-3 border">Currency</th>
                  <th className="p-3 border">Payment Method</th>
                  <th className="p-3 border">Status</th>
                  <th className="p-3 border">Amount</th>
                  <th className="p-3 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentTransactions.map((txn) => (
                  <tr key={txn.id}>
                    <td className="p-3 border">{txn.id}</td>
                    <td className="p-3 border">{txn.accountNumber}</td>
                    <td className="p-3 border">{txn.date}</td>
                    <td className="p-3 border">{txn.bank}</td>
                    <td className="p-3 border flex items-center gap-2">
                      {txn.paymentType === "Debit" ? (
                        <MoveUp className="bg-red-200 text-red-600 rounded-full w-6 h-6 p-1" />
                      ) : (
                        <MoveDown className="bg-green-200 text-green-600 rounded-full w-6 h-6 p-1" />
                      )}
                      {txn.paymentType}
                    </td>
                    <td className="p-3 border">{txn.currency}</td>
                    <td className="p-3 border">{txn.paymentMethod}</td>
                    <td
                      className={`p-3 border ${
                        txn.status === "Successful"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {txn.status}
                    </td>
                    <td className="p-3 border">{txn.amount}</td>
                    <td className="p-3 border text-center relative ">
                      <button
                        className=" px-1 py-1 border border-[#E4E7EC] bg-white text-brandColor-1 rounded"
                        onClick={() => toggleAction(txn.id)}
                      >
                        <EllipsisVertical className="w-4 " />
                      </button>
                      {isOpen === txn.id && (
                        <div className="absolute right-0 mt-2 w-16 bg-white shadow-md rounded-xl border border-gray-200 z-10">
                          {tableOptions.map((option) => (
                            <div
                              key={option}
                              className="px-4 py-2 hover:bg-gray-100 hover:text-gray-700 cursor-pointer text-active-color text-xs"
                              onClick={() => {
                                setIsOpen(false);
                              }}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}

          <div className="flex items-center justify-center space-x-2 mt-4">
            <button
              className="px-3 py-1 rounded shadow-sm bg-text-color disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "border-2 border-brandColor-2 text-brandColor-1"
                    : "shadow-sm bg-text-color"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              className="px-3 py-1 rounded shadow-sm bg-text-color disabled:opacity-50"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTransactionsTable;
