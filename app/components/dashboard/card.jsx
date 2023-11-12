import { MdSupervisedUserCircle } from "react-icons/md";

const Card = ({ item }) => {
  return (
    <div className="flex gap-1 bg-[var(--bgSoft)] p-4 rounded-lg w-full hover:bg-[var(--bgHover)]">
      <span>
        <MdSupervisedUserCircle size={24} />
      </span>
      <div className="flex flex-col gap-1">
        <span>Total User</span>
        <span className="text-lg font-bold">10.273</span>
        <span>
          <span className="text-[var(--positive)]">12%</span> more than previus
          week
        </span>
      </div>
    </div>
  );
};

export default Card;
