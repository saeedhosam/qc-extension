import { useState, useRef } from "react"
import { Checkbox } from "./checkbox-card"

export const ExpandableCard = ({ title, items, onTooltipClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [checkedItems, setCheckedItems] = useState(items.map(() => false))
  const checkedCount = checkedItems.filter(Boolean).length
  const contentRef = useRef<HTMLDivElement>(null)

  const toggleItem = (index) => {
    setCheckedItems((prev) => {
      const next = [...prev]
      next[index] = !next[index]
      return next
    })
  }

  // Determine badge styles based on progress
  let badgeClasses = "text-xs font-semibold px-2.5 py-0.5 rounded-full"
  if (checkedCount === items.length) {
    badgeClasses += " bg-green-100 text-green-800"
  } else if (checkedCount > 0) {
    badgeClasses += " bg-yellow-100 text-yellow-800"
  } else {
    badgeClasses += " bg-gray-100 text-gray-800"
  }

  return (
    <div className="w-full my-2 bg-white border border-gray-200 rounded-lg shadow-sm transition-all duration-300">
      <button
        className="w-full flex justify-between items-center p-4 select-none cursor-pointer focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}>
        <span className="font-semibold text-gray-800">{title}</span>
        <div className="flex items-center">
          <span className={`${badgeClasses}`}>
            {checkedCount}/{items.length}
          </span>
          <svg
            className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            } ml-3`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight:
            isOpen && contentRef.current
              ? `${contentRef.current.scrollHeight}px`
              : "0px"
        }}>
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="space-y-3">
            {items.map((checkbox, idx) => (
              <Checkbox
                key={idx}
                text={checkbox.text}
                tooltipText={checkbox.tooltipText}
                checked={checkedItems[idx]}
                onChange={() => toggleItem(idx)}
                onTooltipClick={onTooltipClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
