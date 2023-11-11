"use client";
import Link from "next/link";
import { menuItems } from "@/app/data";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen">
      <div className="flex gap-4 mb-7 items-center">
        <Image
          className="rounded-full"
          src="/noavatar.png"
          alt="No Avater"
          width={50}
          height={50}
        />
        <div className="flex flex-col">
          <span className="font-semibold">John Doe</span>
          <span className="text-[12px]">Adminstrator</span>
        </div>
      </div>
      <ul>
        {menuItems.map((cat) => (
          <div key={cat.title} className={"mb-5 flex flex-col gap-2"}>
            <li>{cat.title}</li>
            {cat.list.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className={`flex gap-2 items-center hover:bg-gray-700/50 rounded-sm pl-4 py-1 ${
                  pathname === item.path ? "bg-gray-700/50" : ""
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
