const MainTabs = ({ activeTool, setActiveTool }) => {
  const tools = ["QC", "Tasks", "Taxes"];
  
  return (
    <div className="flex w-full justify-around bg-gray-200">
      {tools.map((tool) => (
        <button
          key={tool}
          className={`px-4 py-2 font-bold transition-colors duration-300 ${
            activeTool === tool
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTool(tool)}
        >
          {tool}
        </button>
      ))}
    </div>
  );
};

export default MainTabs;
