export const Checkbox = ({
  text,
  tooltipText,
  checked,
  onChange,
  onTooltipClick
}) => {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
        checked
          ? "bg-blue-50 border-blue-200"
          : "bg-white hover:bg-gray-50 border-gray-200"
      } border`}>
      <label className="flex items-center select-none cursor-pointer">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span
          className={`ml-3 text-sm ${
            checked ? "text-blue-800 font-medium" : "text-gray-700"
          }`}>
          {text}
        </span>
      </label>

      {tooltipText && (
        <div
          className="p-1 rounded-full hover:bg-gray-200 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation()
            onTooltipClick(tooltipText)
          }}
          data-tooltip-trigger>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      )}
    </div>
  )
}
