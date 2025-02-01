import { ChevronRight, Zap } from "lucide-react";
import countryIcon from "../assets/images/Country.png";
const RateExchange = () => {
  return (
    <>
      <div className="w-[544px] flex flex-col gap-3 ">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Zap className="text-brandColor-3" />
            <p className="text-brandColor-1 text-lg font-semibold">Rates</p>
          </span>
          <span className="flex items-center text-active-color text-xs font-semibold cursor-pointer">
            <p>View all</p>
            <ChevronRight className=" text-active-color text-xs w-[17px] " />
          </span>
        </div>
        <div className="bg-white shadow-sm py-6 px-5 rounded-3xl grid grid-cols-1 gap-6">
          <div className="flex  items-center justify-between gap-10">
            <div className="flex items-center gap-5">
              <img
                src={countryIcon}
                alt=""
                className="bg-[#FBEAE9] w-[40px] h-[40px] rounded-full"
              />
              <div className="flex flex-col gap-1">
                <p className="text-brandColor-1 text-sm font-semibold">
                  United States Dollar
                </p>
              </div>
            </div>
            <p className="text-active-color text-xs font-medium ">$1=₦1600</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RateExchange;
