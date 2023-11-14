import Image from "next/image";
import styles from "./dashboard.module.css";

const users = [
  {
    name: "John Doe",
    status: "Pending",
    date: "14.02.2023",
    amount: "75.40",
  },
  {
    name: "Robart",
    status: "Done",
    date: "21.05.2023",
    amount: "81.50",
  },
  {
    name: "Zemi Sen",
    status: "Cancelled",
    date: "04.07.2023",
    amount: "50.00",
  },
];

const Transaction = () => {
  return (
    <div className="bg-[var(--bgSoft)] w-full p-4 font-light rounded-lg">
      <h1 className="text-lg mb-4">Latest Transactions</h1>
      <table className={`w-full ${styles.table}`}>
        {/* --------------Table Head----------------- */}
        <thead className="font-semibold">
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        {/* --------------Table Body----------------- */}
        <tbody>
          {users.map((user) => (
            <tr key={user.name}>
              <td className="flex gap-3 items-center">
                <Image
                  src="/noavatar.png"
                  alt="Avater"
                  width={35}
                  height={35}
                  className="rounded-full bg-cover"
                />
                {user.name}
              </td>
              <td>
                <span className={`${user.status}`}>{user.status}</span>
                {/* <span className={`${styles.status} ${styles.pending}`}>Pending</span> */}
              </td>
              <td>{user.date}</td>
              <td>{user.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
