import { genSaltSync, hashSync, compareSync } from "bcrypt-ts"

const salt = genSaltSync(10)

export function hashPassword(password: string) {
  return hashSync(password, salt)
}

export function comparePassword(data: string, encrypt: string) {
  return compareSync(data, encrypt)
}
