import { Link, NavLink } from "react-router-dom";
import {
  House,
  ChartColumn,
  UsersRound,
  MailWarning,
  UserRound,
  Unplug,
  Zap,
  Settings,
  LogOut,
  Check,
} from "lucide-react";

import Logo from "../assets/images/logo.png";
import Image from "../assets/images/image_tempay.png";

const SideBar = () => {
  return (
    <>
      <div className="w-[272px] bg-brandColor-1 h-dvh flex flex-col justify-between p-2">
        <div className="flex flex-col gap-4">
          <img src={Logo} alt="Tampay Logo" />
          <ul className="sideBar flex flex-col gap-2">
            <li className="group">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active" : "menuHoveState"
                }
              >
                <span className="flex gap-2 items-center text-active-color text-base">
                  <House className="iconStateColor" />
                  <p className="paragraphText">Dashboard</p>
                </span>
                <span className="px-2.5 rounded-[10px] bg-brandColor-3 text-sm"></span>
              </NavLink>
            </li>

            <li className="group">
              <NavLink
                to="/transaction"
                className={({ isActive }) =>
                  isActive ? "active" : "menuHoveState"
                }
              >
                <span className="iconText">
                  <ChartColumn className="iconStateColor" />
                  <p className="paragraphText">Transactions</p>
                </span>
                <span></span>
              </NavLink>
            </li>
            <li className="menuHoveState">
              <span className="iconText">
                <UsersRound />
                <Link>Users</Link>
              </span>
              <span></span>
            </li>
            <li className="menuHoveState">
              <span className="iconText">
                <MailWarning />
                <Link>Reports</Link>
              </span>
              <span className="px-2.5 rounded-[10px] bg-brandColor-3 text-sm">
                10
              </span>
            </li>
            <li className="menuHoveState">
              <span className="iconText">
                <UserRound />
                <Link>Admins</Link>
              </span>
              <span></span>
            </li>
            <li className="menuHoveState">
              <span className="iconText">
                <Unplug />
                <Link>Services</Link>
              </span>
              <span></span>
            </li>
            <li className="menuHoveState">
              <span className="iconText">
                <Zap />
                <Link>Rates</Link>
              </span>
              <span></span>
            </li>
          </ul>
        </div>
        <div>
          <ul className="sideBar flex flex-col gap-4">
            <li className="menuHoveState">
              <span className="iconText">
                <Settings />
                <Link>Settings</Link>
              </span>
              <span></span>
            </li>
            <li className="flex justify-between items-center px-5  hover:bg-hoverBG  py-3">
              <div className="relative">
                <img
                  src={Image}
                  alt=""
                  className="w-12 rounded-full bg-pink-300 "
                />
                <Check className="absolute -bottom-1 -right-1 bg-blue-700 rounded-full text-text-color p-1 font-extrabold" />
              </div>
              <LogOut className="text-active-color" />
            </li>
          </ul>
          <div className="hidden text-brandColor-2 text-text-color"></div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
