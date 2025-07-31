import { useEffect, useRef, useState } from "react"

import { Checkbox } from "~components/checkbox-card"

import "~style.css"

function IndexPopup() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [isOpen])

  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <div className="relative flex flex-col justify-center" ref={menuRef}>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white mb-2 font-bold py-2 px-4 rounded cursor-pointer select-none focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}>
         Category
        </button>
        <ul
          className={`bg-white rounded w-40 border transition-all mb-5 duration-300 overflow-hidden ${
            isOpen ? "max-h-40 p-2" : "max-h-0 border-0 p-0"
          }`}>
          <li className="p-2 text-center hover:bg-gray-100 cursor-pointer select-none">
            Issuance
          </li>
          <li className="p-2 text-center hover:bg-gray-100 cursor-pointer select-none">
            Exchange
          </li>
          <li className="p-2 text-center hover:bg-gray-100 cursor-pointer select-none">
            Refund
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center px-4 w-full">
        <div className="w-full max-w-md">
          <Checkbox text="Rubik woiejfpowiej fpoiwjepfo iwjepfoijw epofijwpeoifj pwoeijf " />
          <Checkbox text="test 2" />
          <Checkbox text="test 3" />
        </div>
      </div>
    </div>
  )
}

export default IndexPopup
