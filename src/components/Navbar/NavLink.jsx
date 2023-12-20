import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, label }) => {
  const pages = usePathname();
  return (
    <Link href={href}>
      <li
        className={`${
          pages === href ? "bg-[#F2F2F2] " : ""
        } group relative flex item-center gap-1.5 px-2 py-2 hover:bg-[#F2F2F2] cursor-pointer rounded-md submenu`}
      >
        <span>{label}</span>

        {/* <span className="flex items-center">
                <DownArrow />
              </span> */}
        {/* <div className="group-hover:block hidden shadow-md bg-white absolute top-5 rounded-[8px] w-[130px] px-2 py-2 transition-all duration-1000 ease-in-out submenu-item">
                <ul className="space-y-1">
                  <li>Item-1</li>
                  <li>Item-1</li>
                  <li>Item-1</li>
                  <li>Item-1</li>
                </ul>
              </div> */}
      </li>
    </Link>
  );
};

export default NavLink;
