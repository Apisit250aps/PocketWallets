"use client"
import axios from "axios"
import { useState } from "react"
import Swal from "sweetalert2"
function SignUpForm() {
  const [email, setEmail] = useState<string>()
  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>()

  const handlerSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    await axios({
      method: "post",
      url: "/api/auth/signup",
      data: {
        email,
        username,
        password
      }
    })
      .then((response) => {
        if (response.status == 201) {
          Swal.fire({
            title: "Success!",
            text: response.data.message,
            icon: "success"
          })
        }
      })
      .catch((err) => {
        
        if (err.response.status == 400) {
          Swal.fire({
            title: "Error!",
            text: err.response.data.message,
            icon: "error"
          })
        } else if (err.response.status == 500) {
          Swal.fire({
            title: "Error!",
            text: err,
            icon: "error"
          })
        }
      })
  }
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handlerSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
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
            <a href="#" className="label-text-alt link link-hover">
              Back to sign in
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
