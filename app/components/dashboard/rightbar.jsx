import Image from "next/image";
import styles from "./dashboard.module.css";

import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className=" fixed ">
      <div className=" w-full bg-[var(--bgSoft)] rounded-lg p-4 relative mb-4">
        <div className="">
          <Image
            className="opacity-30 absolute bottom-0 right-0"
            src="/astronaut.png"
            alt=""
            width={100}
            height={100}
          />
        </div>
        {/* ------------------------------------------- */}
        <div className="flex flex-col gap-5 ">
          <span className="font-semibold">🔥 Available Now</span>
          <h3 className="text-[15px] font-semibold">
            How to use the new version of the admin dashboard?
          </h3>
          <span className="">Takes 4 minutes to learn</span>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="flex gap-1 items-center bg-[var(--primary)] w-fit px-2 py-1 rounded-md">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      {/* ------------------------------------------- */}
      <div className="flex flex-col gap-5 w-full bg-[var(--bgSoft)] rounded-lg p-4 mb-4">
        <span className="font-semibold">🚀 Coming Soon</span>
        <h3 className="text-[15px] font-semibold">
          New server actions are available, partial pre-rendering is coming up!
        </h3>
        <span className="">Boost your productivity</span>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          eius libero perspiciatis recusandae possimus.
        </p>
        <button className="flex gap-1 items-center bg-[var(--primary)] w-fit px-2 py-1 rounded-md">
          <MdReadMore />
          Learn
        </button>
      </div>
    </div>
  );
};

export default Rightbar;
