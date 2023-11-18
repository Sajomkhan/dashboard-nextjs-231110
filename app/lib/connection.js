import mongoose from "mongoose";

const connection = {};

export const connectDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.DB_URL);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

// export const connectDB = async() => {
//     try {
//         await mongoose.connect(process.env.DB_URL);
//         console.log("DB is connected");
//     } catch (error) {
//           console.log("DB is not connected");
//           console.log(error.message);
//           process.exit(1)
//       }
// }
