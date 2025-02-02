import { ChevronRight, MoveUp, MoveDown } from "lucide-react";
const RecentTransactions = () => {
  return (
    <>
      <div className=" flex flex-col gap-3 ">
        <div className="flex items-center justify-between">
          <p className="text-brandColor-1 text-lg font-semibold">
            Recent Transactions
          </p>
          <span className="flex items-center text-active-color text-xs font-semibold cursor-pointer">
            <p>See all</p>
            <ChevronRight className=" text-active-color text-xs w-[17px] " />
          </span>
        </div>
        <div className="bg-white shadow-sm py-6 px-5 rounded-3xl grid grid-cols-1 gap-6">
          <div className="flex  items-center justify-between gap-5 md:gap-10">
            <div className="flex items-center gap-5">
              <MoveUp className="bg-[#FBEAE9] text-[#D42620] rounded-full w-[40px] h-[40px] p-2.5" />
              <div className="flex flex-col gap-1">
                <p className="text-brandColor-1 text-sm">Mamudu Jeffrey</p>
                <p className="text-active-color text-xs">
                  Recipient: Angela Monet
                </p>
                <p className="text-active-color text-xs">
                  Kuda Bank Today, 4:15PM
                </p>
              </div>
            </div>
            <p className=" text-xs md:text-sm font-semibold">
              -&#8358;94,200.00
            </p>
          </div>

          <div className="flex  items-center justify-between gap-5 md:gap-10">
            <div className="flex items-center gap-5">
              <MoveUp className="bg-[#FBEAE9] text-[#D42620] rounded-full w-[40px] h-[40px] p-2.5" />
              <div className="flex flex-col gap-1">
                <p className="text-brandColor-1 text-sm">Web Payment</p>
                <p className="text-active-color text-xs">Card payment</p>
                {/* <p className="text-active-color text-xs">
                  Kuda Bank Today, 4:15PM
                </p> */}
              </div>
            </div>
            <p className="text-xs md:text-sm font-semibold">-$11,000.00</p>
          </div>

          <div className="flex  items-center justify-between gap-5 md:gap-10">
            <div className="flex items-center gap-5">
              <MoveDown className="bg-[#E7F6EC] text-[#0F973D] rounded-full w-[40px] h-[40px] p-2.5" />
              <div className="flex flex-col gap-1">
                <p className="text-brandColor-1 text-sm">Joshua Usiholo</p>
                <p className="text-active-color text-xs">
                  Sender: Angela Monet
                </p>
                <p className="text-active-color text-xs">
                  GTBank Today, 4:15PM
                </p>
              </div>
            </div>
            <p className="text-xs md:text-sm font-semibold">&#8358;94,200.00</p>
          </div>

          <div className="flex  items-center justify-between gap-5 md:gap-10">
            <div className="flex items-center gap-5">
              <MoveDown className="bg-[#E7F6EC] text-[#0F973D] rounded-full w-[40px] h-[40px] p-2.5" />
              <div className="flex flex-col gap-1">
                <p className="text-brandColor-1 text-sm">Mamudu Jeffrey</p>
                <p className="text-active-color text-xs">
                  Sender: Angela Monet
                </p>
                <p className="text-active-color text-xs">
                  Access Bank Today, 4:15PM
                </p>
              </div>
            </div>
            <p className="text-xs md:text-sm font-semibold">&#8358;94,200.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentTransactions;
