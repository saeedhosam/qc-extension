const MainTabs = ({ activeTool, setActiveTool }) => {
  const tools = ["QC", "Tasks", "Taxes"]

  return (
    <div className="w-full border-b border-gray-200">
      <nav className="flex -mb-px" aria-label="Tabs">
        {tools.map((tool) => (
          <button
            key={tool}
            onClick={() => setActiveTool(tool)}
            className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm transition-all duration-200 ease-in-out focus:outline-none
              ${
                activeTool === tool
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }
            `}>
            {tool}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default MainTabs
