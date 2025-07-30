import { useReducer } from "react"

export const Checkbox = ({ text }) => {
  return (
    <label
      className="flex w-full items-center m-4 px-4 py-2 text-sm rounded-lg transition-all border-none cursor-pointer
      shadow-lg hover:shadow-md active:scale-105 bg-slate-50 hover:bg-slate-100 text-slate-800 hover:text-slate-900">
      <input type="checkbox" className="mr-2 cursor-pointer" />
      <span className="inline-flex items-center select-none justify-center h-4 ml-2 text-xs font-semibold rounded-full">
        {text}
      </span>
    </label>
  )
}
