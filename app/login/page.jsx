import styles from "../components/dashboard/dashboard.module.css";
// import styles from "../home.module.css";

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-80 bg-[var(--bgSoft)] p-5 rounded-lg">
        <h1 className="text-xl mb-6 text-center">Login</h1>
        <form className={`${styles.login} flex flex-col gap-8`}>
          <di5 className="flex flex-col gap-2">
            <label htmlFor="username">User Name:</label>
            <input type="text" placeholder="User Name" />
          </di5>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password:</label>
            <input type="text" placeholder="password" />
          </div>
          <button className="btn_primary px-5 py-3">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
