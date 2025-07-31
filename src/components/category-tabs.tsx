import { useEffect, useRef, useState } from "react"

import qcData from "~assets/qc-data.json"

interface CategoryTabsProps {
  activeCategory: string
  setActiveCategory: (category: string) => void
}

const CategoryTabs = ({
  activeCategory,
  setActiveCategory
}: CategoryTabsProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const categories = Object.keys(qcData)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSelect = (category: string) => {
    setActiveCategory(category)
    setIsOpen(false)
  }

  return (
    <div className="w-full px-4 py-3">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between bg-white border-2 border-gray-200 text-gray-800 py-3 px-4 rounded-xl leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-md hover:shadow-lg hover:border-gray-300 transition-all duration-200 font-medium">
          <span className="truncate">{activeCategory}</span>
          <svg
            className={`h-5 w-5 transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl max-h-60 overflow-y-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleSelect(category)}
                className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-150 font-medium first:rounded-t-xl last:rounded-b-xl ${
                  category === activeCategory
                    ? "bg-blue-50 text-blue-700 border-r-2 border-blue-500"
                    : "text-gray-800"
                }`}>
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryTabs
