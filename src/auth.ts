import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials, req) => {
        const body = await req.json();

        console.log("body", body);
        if (!credentials) return null;
        return {
          name: "fsdf",
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
  secret: "1212121",
});
