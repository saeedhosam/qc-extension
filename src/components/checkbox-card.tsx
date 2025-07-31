import { useState } from "react"
import { FaCheck } from "react-icons/fa"

export function Checkbox({ text }: { text: string }) {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="flex items-center space-x-2 my-2">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="hidden peer"
        id={text} // Using text as id for a simple example
      />
      <label
        htmlFor={text}
        className="relative flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-md cursor-pointer peer-checked:bg-blue-500 peer-checked:border-transparent transition-colors duration-200"
      >
        {isChecked && (
          <FaCheck className="w-4 h-4 text-white" />
        )}
      </label>
      <label
        htmlFor={text}
        className="text-gray-700 cursor-pointer text-sm"
      >
        {text}
      </label>
    </div>
  )
}
