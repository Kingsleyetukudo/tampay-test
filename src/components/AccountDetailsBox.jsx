import { usePageTitle } from "./PageTitleContext";

const AccountDetailsBox = () => {
  const { isSidebarOpen } = usePageTitle();
  return (
    <>
      <div className="flex flex-col gap-3">
        <div>
          <h2 className="font-semibold text-lg">Account Metrics</h2>
        </div>
        <div
          className={`grid md:grid-cols-4 gap-4 md:gap-8 ${
            isSidebarOpen ? "grid-cols-1" : "grid-cols-2"
          }`}
        >
          <div className="account-box ">
            <p className="text-text-color text-xs">Volume Transacted Today</p>
            <p className="text-brandColor-2 font-bold text-2xl md:text-4xl">
              &#8358;45,823{" "}
            </p>
          </div>
          <div className="account-box-1">
            <p className="text-active-color text-xs">Card Transactions</p>
            <p className="text-brandColor-1 font-bold text-2xl md:text-4xl">
              $13,000
            </p>
          </div>
          <div className="account-box-1">
            <p className="text-active-color text-xs">Number Of Active Users</p>
            <p className="text-brandColor-1 font-bold text-2xl md:text-4xl">
              45,823{" "}
            </p>
          </div>
          <div className="account-box-1">
            <p className="text-active-color text-xs">Pending Transactions</p>
            <p className="text-brandColor-3 font-bold text-2xl md:text-4xl">
              95
            </p>
            <span className="text-gray-900 text-xs flex justify-end">
              View Transactions
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDetailsBox;
