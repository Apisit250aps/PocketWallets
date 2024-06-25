import NextAuth from "next-auth"

import { PrismaClient } from "@prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"

const prisma = new PrismaClient()


import Credentials from "next-auth/providers/credentials"

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        
        
        return null
      }
    })
  ]
})
