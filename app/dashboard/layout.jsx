import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

export const metadata = {
  title: "Admin & Deshboard",
  description: "Admin & Deshboard Pages",
};

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-1 bg-[var(--bgSoft)] p-5">
        <Sidebar />
      </div>
      <div className="col-span-5 p-5">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
