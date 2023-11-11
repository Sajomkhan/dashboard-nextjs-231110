import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

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
      <div className="col-span-4 p-7">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
