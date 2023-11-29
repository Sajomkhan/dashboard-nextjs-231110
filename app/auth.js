// we are gonna fetch our user
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "./lib/models";
import bcrypt from "bcrypt";
import { connectDB } from "./lib/connection";
import { authConfig } from "./authconfig";

//declar a function of login
const login = async (credentials) => {
  try {
    connectDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user || !user.isAdmin) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

//-------------------Collect session----------------
export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials); // invoked  login function
          return user; //nextjs will take this user and will pass this to session
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  // Add additional information to session
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        // token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        // session.user.img = token.img;
      }
      return session;
    },
  },
});
