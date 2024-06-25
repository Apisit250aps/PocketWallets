"use client"
import { signIn } from "next-auth/react"
import { useState } from "react"
function SignInForm() {
  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>()

  const handlerSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    try {
      const result = await signIn("credentials", {
        redirect: false,
        username: username,
        password: password
      })
      if (result?.error) {
        console.error(result?.error)
      }
    } catch (error) {}
  }

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handlerSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="username"
            placeholder="email"
            className="input input-bordered"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className="label">
            <a href="/auth/signup" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
