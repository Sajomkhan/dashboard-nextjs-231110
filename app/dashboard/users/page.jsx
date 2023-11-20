import Search from "@/app/components/dashboard/search";
import Image from "next/image";
import Link from "next/link";
import styles from "../../components/dashboard/dashboard.module.css";
import Pagination from "@/app/components/dashboard/pagination";
// import { users } from "@/app/data";
import { fetchUsers } from "@/app/lib/fetcher";

const UserPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { count, users } = await fetchUsers(q, page);

  return (
    <div className="bg-[var(--bgSoft)] p-4 rounded-sm">
      <div className="flex justify-between items-center mr-4 mb-7">
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className="btn_primary">Add New</button>
        </Link>
      </div>
      <table className={`w-full ${styles.table}`}>
        {/* --------------Table Head----------------- */}
        <thead>
          <tr>
            <td>Name</td>
            <td>Address</td>
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
            <tr key={user.username}>
              <td>
                <div className="flex gap-3 items-center">
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.address}</td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "Active" : "Passive"}</td>
              <td>
                <div className="flex gap-4">
                  <Link href={`/dashboard/users/${user._id}`}>
                    <button className={`btn_primary`}>View</button>
                  </Link>
                  <button className={`btn_danger`}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UserPage;
