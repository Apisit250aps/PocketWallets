import { ReactNode } from "react"

function HeaderLabel({
  title,
  children
}: Readonly<{ title: string; children?: ReactNode }>) {
  return (
    <div className="px-4 pt-4 mb-4 flex flex-row items-center justify-between">
      <h2 className="text-2xl font-semibold ">{title}</h2>
      {children}
    </div>
  )
}

export default HeaderLabel
