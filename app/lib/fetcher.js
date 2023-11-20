import { connectDB } from "./connection";
import { User } from "./models";

export const fetchUsers = async (q) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } });
    // .limit(ITEM_PER_PAGE)
    // .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
