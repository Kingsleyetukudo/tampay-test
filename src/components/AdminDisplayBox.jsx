import { ChevronRight } from "lucide-react";
import image from "../assets/images/image_tempay.png";
const AdminDisplay = () => {
  return (
    <>
      <div className="flex flex-col gap-3 ">
        <div className="flex items-center justify-between">
          <p className="text-brandColor-1 text-lg font-semibold">
            Active Admins
          </p>
          <span className="flex items-center text-active-color text-xs font-semibold cursor-pointer">
            <p>View all</p>
            <ChevronRight className=" text-active-color text-xs w-[17px] " />
          </span>
        </div>
        <div className="bg-white shadow-sm py-6 px-10 rounded-3xl flex gap-6">
          <div className="flex  items-center justify-between gap-10">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className=" w-[50px] h-[50px]">
                <img
                  src={image}
                  alt=""
                  className="bg-[#FBEAE9] text-[#D42620] rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-brandColor-1 text-xs font-bold">
                  Ariana Bush
                </p>
                <p className="text-active-color text-xs">@ariana007</p>
              </div>
            </div>
          </div>

          <div className="flex  items-center justify-between gap-10">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className=" w-[50px] h-[50px]">
                <img
                  src={image}
                  alt=""
                  className="bg-[#FBEAE9] text-[#D42620] rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-brandColor-1 text-xs font-bold">
                  Ariana Bush
                </p>
                <p className="text-active-color text-xs">@ariana007</p>
              </div>
            </div>
          </div>

          <div className="flex  items-center justify-between gap-10">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className=" w-[50px] h-[50px]">
                <img
                  src={image}
                  alt=""
                  className="bg-[#FBEAE9] text-[#D42620] rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-brandColor-1 text-xs font-bold">
                  Ariana Bush
                </p>
                <p className="text-active-color text-xs">@ariana007</p>
              </div>
            </div>
          </div>

          <div className="flex  items-center justify-between gap-10">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className=" w-[50px] h-[50px]">
                <img
                  src={image}
                  alt=""
                  className="bg-[#FBEAE9] text-[#D42620] rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-brandColor-1 text-xs font-bold">
                  Ariana Bush
                </p>
                <p className="text-active-color text-xs">@ariana007</p>
              </div>
            </div>
          </div>

          <div className="flex  items-center justify-between gap-10">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className=" w-[50px] h-[50px]">
                <img
                  src={image}
                  alt=""
                  className="bg-[#FBEAE9] text-[#D42620] rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-brandColor-1 text-xs font-bold">
                  Ariana Bush
                </p>
                <p className="text-active-color text-xs">@ariana007</p>
              </div>
            </div>
          </div>
          <div className="flex  items-center justify-between gap-10">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className=" w-[50px] h-[50px]">
                <img
                  src={image}
                  alt=""
                  className="bg-[#FBEAE9] text-[#D42620] rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-brandColor-1 text-xs font-bold">
                  Ariana Bush
                </p>
                <p className="text-active-color text-xs">@ariana007</p>
              </div>
            </div>
          </div>
          <div className="flex  items-center justify-between gap-10">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className=" w-[50px] h-[50px]">
                <img
                  src={image}
                  alt=""
                  className="bg-[#FBEAE9] text-[#D42620] rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-brandColor-1 text-xs font-bold">
                  Ariana Bush
                </p>
                <p className="text-active-color text-xs">@ariana007</p>
              </div>
            </div>
          </div>
          <div className="flex  items-center justify-between gap-10">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className=" w-[50px] h-[50px]">
                <img
                  src={image}
                  alt=""
                  className="bg-[#FBEAE9] text-[#D42620] rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-brandColor-1 text-xs font-bold">
                  Ariana Bush
                </p>
                <p className="text-active-color text-xs">@ariana007</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDisplay;
