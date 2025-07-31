export const Checkbox = ({ text, tooltipText, onMouseEnter, onMouseLeave }) => {
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

      <div
        className="ml-auto"
        onMouseEnter={() => onMouseEnter(tooltipText)} // <-- New event handler
        onMouseLeave={onMouseLeave} // <-- New event handler
      >
        <span className="cursor-pointer text-gray-400 hover:text-gray-600">
          ?
        </span>
      </div>
    </label>
  );
};
