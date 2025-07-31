export const Checkbox = ({ text, tooltipText, onTooltipClick }) => {
  return (
    <div className="flex items-center my-2 w-full">
      <label
        className="flex flex-1 items-center px-4 py-2 text-sm rounded-lg transition-all border-none cursor-pointer
      shadow-lg hover:shadow-md active:scale-105 bg-slate-50 hover:bg-slate-100 text-slate-800 hover:text-slate-900">
        <input type="checkbox" className="mr-2 cursor-pointer" />
        <span className="inline-flex items-center select-none ml-2 text-xs rounded-full">
          {text}
        </span>
      </label>

      <div
        className="ml-2 p-2 rounded-lg shadow-lg hover:shadow-md active:scale-105 bg-slate-50 hover:bg-slate-100 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation(); // prevent the main card click from firing
          onTooltipClick(tooltipText);
        }}
        data-tooltip-trigger>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400 hover:text-gray-600"
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
    </div>
  );
};
