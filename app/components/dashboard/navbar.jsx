"use client";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-between bg-[var(--bgSoft)] px-7 py-3">
      <div className="uppercase font-bold">{pathname.split("/").pop()}</div>
      <div className="flex items-center gap-10">
        <div className="flex gap-1 items-center bg-[var(--bgHover)] rounded-lg px-3 py-2">
          <MdSearch size={18} />
          <input type="text" placeholder="Search" />
        </div>
        <div className="flex gap-3 items-center">
          <MdOutlineChat
            className="cursor-pointer hover:text-teal-600"
            size={18}
          />
          <MdNotifications
            className="cursor-pointer hover:text-teal-600"
            size={18}
          />
          <MdPublic className="cursor-pointer hover:text-teal-600" size={18} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;