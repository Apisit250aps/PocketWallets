import { ReactNode } from "react"
import Navbar from "../navigations/Navbar"

function LabelButton() {
  return (
    <label
      htmlFor="my-drawer-2"
      className="drawer-button lg:hidden btn-ghost btn drawer-overlay"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-5 h-5 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </label>
  )
}

async function Drawer({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-base-300">
        <Navbar label={<LabelButton />} title="Wallet" />
        {children}
      </div>
      <div id="side-bar" className="drawer-side min-h-full lg:min-h-0">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-1/2 min-h-full bg-base-100 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Transactions</a>
          </li>
          <div className="divider"></div>
          <li>
            <a>Account</a>
          </li>
          <li className="">
            <a className="bg-red-500 text-white  ">logout</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Drawer
