import { ChevronRight, Earth } from "lucide-react";
import ColumnChart from "./ColumnChart";
import Dropdown from "./FilterDropdown";

const TransactionVolume = () => {
  const options = ["Today", "Week", "Month", "Year"];

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
        <p className="text-brandColor-1 text-lg font-semibold">
          Transaction Volume
        </p>
        <div className="flex gap-4 justify-between md:justify-normal">
          <button className="flex items-center gap-2 bg-white shadow-sm px-4 py-2 rounded-xl text-active-color text-xs font-semibold">
            <Earth className="text-active-color text-xs w-[17px]" />
            <span>All Currencies</span>
            <ChevronRight className="text-active-color text-xs w-[17px]" />
          </button>
          <Dropdown options={options} />
        </div>
      </div>
      <div className="bg-white shadow-sm py-6 px-5 rounded-3xl grid grid-cols-1 gap-6">
        <ColumnChart />
      </div>
    </div>
  );
};

export default TransactionVolume;
