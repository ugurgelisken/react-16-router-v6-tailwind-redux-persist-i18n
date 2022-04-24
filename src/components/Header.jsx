import LanguageChanger from "./LanguageChanger";
import { UserCircleIcon } from "@heroicons/react/solid";
import { CakeIcon } from "@heroicons/react/solid";
import { MenuIcon } from "@heroicons/react/solid";

import { useTranslation } from "react-i18next";
import "./../i18n";

import HayliLogo from "./../assets/images/layli_logo.webp";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="h-60 absolute top-10 left-0 right-0 z-10">
      <div className="navbar xl:w-5/6 lg:w-3/4 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex="0"
              className="btn btn-ghost lg:hidden text-white mx-2"
            >
              <MenuIcon className="h-8 w-8 text-white" />
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-max"
            >
              <li>
                <button>{t("create")}</button>
              </li>
              <li>
                <button>{t("explore")}</button>
              </li>
              <li>
                <button>{t("dashboard")}</button>
              </li>
            </ul>
          </div>
          <img src={HayliLogo} />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-bold text-xl text-white">
            <li>
              <button>{t("create")}</button>
            </li>
            <li>
              <button>{t("explore")}</button>
            </li>
            <li>
              <button>{t("dashboard")}</button>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="flex-none">
            <label tabIndex="0" className="btn btn-ghost">
              <UserCircleIcon className="h-8 w-8 text-white" />
            </label>
            <label tabIndex="0" className="btn btn-ghost mx-2">
              <CakeIcon className="h-8 w-8 text-white" />
            </label>
            <LanguageChanger />
          </div>
        </div>

        <div className="flex-1">
          <img src={HayliLogo} />
        </div>
      </div>
    </div>
  );
};

export default Header;
