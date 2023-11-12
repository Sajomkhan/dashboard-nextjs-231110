import Navbar from "../components/dashboard/navbar";
import Sidebar from "../components/dashboard/sidebar";

export const metadata = {
  title: "Admin & Deshboard",
  description: "Admin & Deshboard Pages",
};

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1 bg-[var(--bgSoft)] p-7">
        <Sidebar />
      </div>
      <div className="col-span-4 px-4">
        <Navbar />
        <div className="px-4">{children}</div>
      </div>
    </div>
  );
}
