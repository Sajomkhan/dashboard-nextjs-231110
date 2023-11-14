import Footer from "../components/dashboard/footer";
import Navbar from "../components/dashboard/navbar";
import Sidebar from "../components/dashboard/sidebar";

export const metadata = {
  title: "Admin & Deshboard",
  description: "Admin & Deshboard Pages",
};

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-1 relative">
        <Sidebar />
      </div>
      <div className="col-span-4">
        <Navbar />
        <div className=" mt-4">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
