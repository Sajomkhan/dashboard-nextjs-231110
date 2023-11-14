import Search from "@/app/components/dashboard/search";
import Image from "next/image";
import Link from "next/link";
import styles from "../../components/dashboard/dashboard.module.css";
import Pagination from "@/app/components/dashboard/pagination";

const users = [
  {
    name: "Johne",
    email: "johne.gmail.com",
    createdAt: "Nov 22 2023",
    role: "client",
    status: "active",
  },
  {
    name: "Dhoe",
    email: "dhoe.gmail.com",
    createdAt: "Mer 25 2023",
    role: "client",
    status: "passive",
  },
  {
    name: "Dhoe",
    email: "dhoe.gmail.com",
    createdAt: "Mer 25 2023",
    role: "client",
    status: "passive",
  },
  {
    name: "Dhoe",
    email: "dhoe.gmail.com",
    createdAt: "Mer 25 2023",
    role: "client",
    status: "passive",
  },
];

const UserPage = () => {
  return (
    <div className="bg-[var(--bgSoft)] p-4 rounded-sm">
      <div className="flex justify-between items-center mr-4 mb-7">
        <Search placeholder="Search for a user..." />
        <Link href="">
          <button className="btn_primary">Add New</button>
        </Link>
      </div>
      <table className={`w-full ${styles.table}`}>
        {/* --------------Table Head----------------- */}
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        {/* --------------Table Body----------------- */}
        <tbody>
          {users.map((user) => (
            <tr key={user.name}>
              <td>
                <div className="flex gap-3 items-center">
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  {user.name}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <Link href="/" className="flex gap-4">
                  <button className={`btn_primary`}>View</button>
                  <button className={`btn_danger`}>Delete</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UserPage;
