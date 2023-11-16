import styles from "../../../components/dashboard/dashboard.module.css";

const AddUser = () => {
  return (
    <div className={`${styles.product} w-full mt-10`}>
      <form
        action=""
        className={`mx-auto w-[600px] bg-[var(--bgSoft)] flex flex-wrap gap-7 p-10 rounded-lg`}
      >
        <input type="text" placeholder="User name" name="username" required />
        <input type="text" placeholder="Email" name="email" required />
        <input type="text" placeholder="Passowrd" name="password" required />
        <select name="isAdmin" id="isAdmin">
          <option value={true} selected>
            Is admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          name="address"
          id="desc"
          cols="30"
          rows="3"
          placeholder="Address"
        />
        <button className="btn_primary px-5 py-3 font-semibold">Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
