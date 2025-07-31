import { useState, useRef, useEffect } from "react";
import qcData from "~assets/qc-data.json";

const CategoryDropdown = ({ activeCategory, setActiveCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // This useEffect handles closing the dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative flex flex-col justify-center" ref={menuRef}>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white mb-2 font-bold py-2 px-4 rounded cursor-pointer select-none focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {activeCategory || "Category"}
      </button>
      <ul
        className={`bg-white rounded w-40 border transition-all mb-2 duration-300 overflow-hidden ${
          isOpen ? "max-h-40 p-2" : "max-h-0 border-0 p-0"
        }`}
      >
        {Object.keys(qcData).map((category) => (
          <li
            key={category}
            className="p-2 text-center hover:bg-gray-100 cursor-pointer select-none"
            onClick={() => {
              setActiveCategory(category);
              setIsOpen(false);
            }}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryDropdown;
