import { useEffect, useRef, useState } from "react"

import { Checkbox } from "~components/checkbox-card"
import { ExpandableCard } from "~components/expandable-card"

import "~style.css"

import qcData from "~assets/qc-data.json"

function IndexSidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [activeTool, setActiveTool] = useState("QC")
  const [activeCategory, setActiveCategory] = useState<string>("Issuance") // <-- NEW STATE
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
    <div className="flex flex-col items-center">
      <div className="flex w-full justify-around bg-gray-200">
        <button
          className={`px-4 py-2 font-bold transition-colors duration-300 ${
            activeTool === "QC"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTool("QC")}>
          QC
        </button>
        <button
          className={`px-4 py-2 font-bold transition-colors duration-300 ${
            activeTool === "Tasks"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTool("Tasks")}>
          Tasks
        </button>
        <button
          className={`px-4 py-2 font-bold transition-colors duration-300 ${
            activeTool === "Taxes"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTool("Taxes")}>
          Taxes
        </button>
      </div>

      <div className="w-full">
        {activeTool === "QC" && (
          <div className="flex flex-col items-center justify-center mt-5">
            <div
              className="relative flex flex-col justify-center"
              ref={menuRef}>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white mb-2 font-bold py-2 px-4 rounded cursor-pointer select-none focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}>
                {activeCategory || "Category"}
              </button>
              <ul
                className={`bg-white rounded w-40 border transition-all mb-2 duration-300 overflow-hidden ${
                  isOpen ? "max-h-40 p-2" : "max-h-0 border-0 p-0"
                }`}>
                {Object.keys(qcData).map((category, index) => (
                  <li
                    key={index}
                    className="p-2 text-center hover:bg-gray-100 cursor-pointer select-none"
                    onClick={() => {
                      setActiveCategory(category)
                      setIsOpen(false) // <-- Close dropdown after selection
                    }}>
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center px-4 w-full">
              <div className="w-full max-w-md">
                {activeCategory &&
                  qcData[activeCategory]?.map((card, index) => (
                    <ExpandableCard key={index} title={card.title}>
                      {card.checkboxes.map((checkbox, checkboxIndex) => (
                        <Checkbox
                          key={checkboxIndex}
                          text={checkbox.text}
                          tooltipText={checkbox.tooltipText}
                        />
                      ))}
                    </ExpandableCard>
                  ))}
              </div>
            </div>
          </div>
        )}

        {activeTool === "Tasks" && (
          <div className="p-4 flex flex-col items-center justify-center mt-5">
            <p>This is the Tasks tool!</p>
          </div>
        )}

        {activeTool === "Taxes" && (
          <div className="p-4 flex flex-col items-center justify-center mt-5">
            <p>This is the Taxes tool!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default IndexSidebar
