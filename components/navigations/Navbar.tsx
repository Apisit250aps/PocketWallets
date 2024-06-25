"use client"
import { ReactNode } from "react"
import { signOut } from "next-auth/react"
function Navbar({
  label,
  title,
  username
}: Readonly<{ label: ReactNode; title: string; username: string }>) {
  return (
    <div
      className="navbar bg-base-100 shadow-none sticky top-0"
      id="navbar-top"
    >
      <div className="navbar-start">{label}</div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">{title}</a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">{username}</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button onClick={() => signOut()}>Sign out</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
