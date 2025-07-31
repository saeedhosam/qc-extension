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
        <span className="absolute hidden group-hover:block bottom-full right-0 mb-2 p-2 w-48 text-center text-xs text-white bg-gray-700 rounded-md shadow-lg z-20">
          {tooltipText}
          <svg
            className="absolute text-gray-700 h-2 w-full left-0 top-full"
            x="0px"
            y="0px"
            viewBox="0 0 255 255">
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
          </svg>
        </span>
      </div>
    </label>
  )
}
