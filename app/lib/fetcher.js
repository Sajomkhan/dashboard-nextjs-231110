import { connectDB } from "./connection";
import { Product, User } from "./models";

// -----------------Fetch Users------------------//
export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectDB();
    const count = await User.find({ username: { $regex: regex } }).count(); // this will count only the number of users
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

// -----------------Fetch Single User and Update------------------//
export const fetchSingleUser = async (id) => {
  try {
    connectDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }
};

// -----------------Fetch Products------------------//
export const fetchProducts = async (q, pageNumber) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectDB();
    const count = await Product.find({ title: { $regex: regex } }).count(); // this will count only the number of product
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (pageNumber - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

// -----------------Fetch Single Product and Update------------------//
export const fetchSingleProduct = async (id) => {
  try {
    connectDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }
};
