import { hashPassword } from "@/utils/password"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json()

    await prisma.user
      .findUnique({
        where: {
          name: username,
          email: email
        }
      })
      .then((result) => {
        if (result) {
          return Response.json({ message: "Username or Email is Exist!" })
        }
      })
      .catch((err) => {
        return Response.json({ err }, { status: 500 })
      })

    const encrypt_password = hashPassword(password)

    const user = await prisma.user.create({
      data: {
        name: username,
        email: email,
        password: encrypt_password
      }
    })

    return Response.json({
      user: user,
      message: "Create user successfully"
    })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
