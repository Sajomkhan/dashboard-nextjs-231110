import Image from "next/image";
import styles from "./dashboard.module.css";

const Transaction = () => {
  return (
    <div className="bg-[var(--bgSoft)] w-full p-4 font-light rounded-lg">
      <h1 className="text-lg mb-4">Latest Transactions</h1>
      <table className={`w-full ${styles.table}`}>
        <thead className="font-semibold">
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="flex gap-2 items-center">
              <Image
                src="/noavatar.png"
                alt="Avater"
                width={35}
                height={35}
                className="rounded-full bg-cover"
              />
              John Doe
            </td>
            <td>
              <span className={`${styles.pending}`}>Pending</span>
              {/* <span className={`${styles.status} ${styles.pending}`}>Pending</span> */}
            </td>
            <td>14.02.2023</td>
            <td>75.40</td>
          </tr>
          <tr>
            <td className="flex gap-2 items-center">
              <Image
                src="/noavatar.png"
                alt="Avater"
                width={35}
                height={35}
                className="rounded-full bg-cover"
              />
              John Doe
            </td>
            <td>
              <span className={`${styles.done}`}>Done</span>
              {/* <span className={`${styles.status} ${styles.pending}`}>Pending</span> */}
            </td>
            <td>21.05.2023</td>
            <td>81.50</td>
          </tr>
          <tr>
            <td className="flex gap-2 items-center">
              <Image
                src="/noavatar.png"
                alt="Avater"
                width={35}
                height={35}
                className="rounded-full bg-cover"
              />
              John Doe
            </td>
            <td>
              <span className={`${styles.cancelled}`}>Cancelled</span>
              {/* <span className={`${styles.status} ${styles.pending}`}>Pending</span> */}
            </td>
            <td>04.07.2023</td>
            <td>50.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
