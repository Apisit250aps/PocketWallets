import Credentials from "next-auth/providers/credentials"
import { PrismaClient } from "@prisma/client"
import { comparePassword } from "@/utils/password"

const prisma = new PrismaClient()

const credentials = Credentials({
  name: "credentials",
  credentials: {
    username: { label: "Username" },
    password: { label: "Password", type: "password" }
  },
  async authorize(credentials) {
    const user = await prisma.user.findUnique({
      where: {
        name: credentials.username as string
      }
    })
    
    if (!user) {
      return null
    }

    const verified = comparePassword(
      credentials.password as string,
      user.password
    )

    if (!(user && verified)) {
      return null
    }
    return user
  }
})

export default credentials
