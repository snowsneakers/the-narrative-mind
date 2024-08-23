import { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user: {
          id: string;
          name: string;
          password: string;
          image: null;
          email: null;
        } = {
          id: "1",
          name: process.env.ADMIN_USERNAME as string,
          password: process.env.ADMIN_PASSWORD as string,
          image: null,
          email: null,
        };
        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return {
            ...user,
            name: user.name[0].toUpperCase() + user.name.slice(1),
          };
        } else {
          throw new Error("invalid username or password");
        }
      },
    }),
  ],
  pages: {
    signIn: process.env.AUTH_OPTIONS_SIGN_IN_URL,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
