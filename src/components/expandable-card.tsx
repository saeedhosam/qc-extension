import { useState } from "react"

export const ExpandableCard = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex my-2 flex-col w-full">
      <div
        className="w-full bg-gray-200 py-2 px-4 rounded cursor-pointer select-none focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
      </div>
      <div
        className={`transition-all duration-100 overflow-hidden ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}>
        <div className="p-2">{children}</div>
      </div>
    </div>
  )
}
