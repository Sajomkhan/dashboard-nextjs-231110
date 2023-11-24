import Image from "next/image";
import styles from "../../../components/dashboard/dashboard.module.css";
import { fetchSingleUser } from "@/app/lib/fetcher";
import { updateUser } from "@/app/lib/actions";

const SingleUser = async ({ params }) => {
  const { id } = params;
  const user = await fetchSingleUser(id);
  return (
    <div
      className={`${styles.input} flex flex-wrap gap-10 justify-center items-center mt-10`}
    >
      {/* --------------Image div---------------- */}
      <div className="bg-[var(--bgSoft)] bg-cover bg-center rounded-lg p-11">
        <Image
          src={user.img || "/noavatar.png"}
          alt=""
          width={220}
          height={220}
          className="rounded-lg"
        />
      </div>
      {/* --------------Form div---------------- */}
      <form
        action={updateUser}
        className={`w-[600px] bg-[var(--bgSoft)] flex flex-wrap gap-7 p-10 rounded-lg`}
      >
        <input type="hidden" name="id" value={user.id} />
        <div className="flex flex-col gap-1">
          <label htmlFor="username">User Name:</label>
          <input type="text" placeholder={user.username} name="username" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email:</label>
          <input type="text" placeholder={user.email} name="email" />
        </div>
        {/* <div className="flex flex-col gap-1">
          <label htmlFor="password">Password:</label>
          <input type="text" placeholder="Passowrd" name="password" required />
        </div> */}
        <div className="flex flex-col gap-1">
          <label htmlFor="isAdmin">Is Admin:</label>
          <select name="isAdmin" id="isAdmin">
            <option>--- Select role ---</option>
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="isActive">Is Active:</label>
          <select name="isActive" id="isActive">
            <option>--- Select active ---</option>
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="address">Address:</label>
          <textarea
            name="address"
            id="address"
            cols="30"
            rows="3"
            placeholder={user.address}
          />
        </div>
        <button className="btn_primary px-5 py-3 font-semibold">Submit</button>
      </form>
    </div>
  );
};

export default SingleUser;
