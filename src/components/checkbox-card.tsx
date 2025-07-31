export const Checkbox = ({ text, tooltipText }) => {
  return (
    <label
      className="flex w-full items-center my-2 px-4 py-2 text-sm rounded-lg transition-all border-none cursor-pointer
      shadow-lg hover:shadow-md active:scale-105 bg-slate-50 hover:bg-slate-100 text-slate-800 hover:text-slate-900">
      <div className="flex-1 flex items-center">
        <input type="checkbox" className="mr-2 cursor-pointer" />
        <span className="inline-flex items-center select-none ml-2 text-xs rounded-full">
          {text}
        </span>
      </div>

      <div className="relative group ml-auto">
        <span className="cursor-pointer text-gray-400 hover:text-gray-600">
          ?
        </span>
        <span className="fixed hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 w-64 text-center text-sm text-white bg-gray-700 rounded-md shadow-lg z-50 pointer-events-none">
          {tooltipText}
        </span>
      </div>
    </label>
  )
}
