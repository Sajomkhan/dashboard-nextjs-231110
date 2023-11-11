"use client";
import Link from "next/link";
import { menuItems } from "@/app/data";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen">
      <ul>
        {menuItems.map((cat) => (
          <div key={cat.title} className={"mb-5 flex flex-col gap-2"}>
            <li>{cat.title}</li>
            {cat.list.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className={`flex gap-2 items-center pl-3 ${
                  pathname === item.path ? "text-teal-400" : ""
                }`}
              >
                {item.icon}
                {item.title}
              </Link>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
