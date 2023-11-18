import { connectDB } from "./connection";
import { User } from "./models";

export const fetchUsers = async () => {
  try {
    connectDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user");
  }
};
