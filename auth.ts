import NextAuth from "next-auth"

import { PrismaClient } from "@prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { NextAuthConfig } from "next-auth"
const prisma = new PrismaClient()

import credentials from "./providers/Credentials"

export const authOptions: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [credentials],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
      }
      return session
    }
  }
}

export const { auth, handlers } = NextAuth(authOptions)
