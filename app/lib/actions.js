import { connectDB } from "./connection";
import { User } from "./models";

export const addUser = async (formData) => {
  "use server";
  const { username, email, password, img, isAdmin, isActive, address } =
    Object.fromEntries(formData);

  try {
    connectDB;
    const newUser = new User({
      username,
      email,
      password,
      img,
      isAdmin,
      isActive,
      address,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user");
  }
};

// export const addUser = async (formData) => {
//   "use server";
//   const { username, email, password, img, isAdmin, isActive, address } =
//     Object.fromEntries(formData);

//   try {
//     connectDB;
//     const newUser = await User.create({
//       username,
//       email,
//       password,
//       img,
//       isAdmin,
//       isActive,
//       address,
//     });
//     return new NextResponse(JSON.stringify(newUser), { status: 200 });

//     // await newUser.save();
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to create user");
//   }
// };
