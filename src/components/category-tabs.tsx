import qcData from "~assets/qc-data.json"

const CategoryTabs = ({ activeCategory, setActiveCategory }) => {
  const categories = Object.keys(qcData)

  return (
    <div className="w-full px-4">
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`w-full text-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none
              ${
                activeCategory === category
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-500 hover:bg-gray-200 hover:text-gray-700"
              }
            `}
            style={{ flex: "0 0 auto" }}>
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryTabs
