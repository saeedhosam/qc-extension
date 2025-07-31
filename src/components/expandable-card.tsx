import { useState, useRef } from "react"
import { Checkbox } from "./checkbox-card"

export const ExpandableCard = ({ title, items, onTooltipClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [checkedItems, setCheckedItems] = useState(items.map(() => false))
  const checkedCount = checkedItems.filter(Boolean).length
  const contentRef = useRef<HTMLDivElement>(null)

  const toggleItem = index => {
    setCheckedItems(prev => {
      const next = [...prev]
      next[index] = !next[index]
      return next
    })
  }
  // Determine badge styles based on progress
  let badgeClasses = 'ml-2 text-sm font-medium px-2 py-0.5 rounded-full'
  if (checkedCount === items.length) badgeClasses += ' bg-green-100 text-green-800'
  else if (checkedCount > 0) badgeClasses += ' bg-yellow-100 text-yellow-800'
  else badgeClasses += ' bg-gray-100 text-gray-600'
  return (
    <div className="flex my-2 flex-col w-full">
      <div
        className="w-full flex justify-between items-center bg-white border border-gray-300 py-2 px-4 rounded-lg shadow cursor-pointer select-none focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}>
        <span className="font-medium text-gray-800">{title}</span>
        <span className={badgeClasses}>{checkedCount}/{items.length}</span>
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen && contentRef.current ? `${contentRef.current.scrollHeight}px` : '0px' }}
      >
        <div className="p-2 bg-gray-50 border border-t-0 border-gray-200 rounded-b-lg">
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
  )
}
