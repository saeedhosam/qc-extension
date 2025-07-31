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
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}>
        <div className="overflow-hidden">
          <div className="p-2">{children}</div>
        </div>
      </div>
    </div>
  )
}
