import { useState, useRef, useEffect } from "react"
import qcData from "~assets/qc-data.json"

const VerticalCategoryNav = ({ activeCategory, setActiveCategory }) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const categories = Object.keys(qcData)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleOutsideClick)
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [])

  return (
    <div className="relative w-full px-4" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
        <span className="font-semibold text-gray-800">{activeCategory}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
          <div className="py-1">
            {categories.map((category) => (
              <a
                key={category}
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setActiveCategory(category)
                  setIsOpen(false)
                }}
                className={`block px-4 py-2 text-sm ${
                  activeCategory === category
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}>
                {category}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default VerticalCategoryNav
