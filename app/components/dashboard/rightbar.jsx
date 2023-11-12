import Image from "next/image";
import styles from "./dashboard.module.css";

import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className=" fixed w-full">
      <div className=" w-full bg-[var(--bgSoft)] rounded-lg p-4 relative">
        <div className="">
          <Image
            className="opacity-50 absolute bottom-0 right-0"
            src="/astronaut.png"
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <span className="">🔥 Available Now</span>
          <h3 className="">
            How to use the new version of the admin dashboard?
          </h3>
          <span className="">Takes 4 minutes to learn</span>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className="">
        <div className="">
          <span className="">🚀 Coming Soon</span>
          <h3 className="">
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className="">Boost your productivity</span>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="">
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
