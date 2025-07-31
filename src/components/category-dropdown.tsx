import { useState, useRef, useEffect } from "react";
import qcData from "~assets/qc-data.json";

const CategoryDropdown = ({ activeCategory, setActiveCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
    <div className="relative w-full max-w-xs" ref={menuRef}>
      <button
        className="w-full flex justify-between items-center bg-white border border-gray-300 py-3 px-4 rounded-lg shadow hover:shadow-md cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-800">
          {activeCategory || "Select Category"}
        </span>
        <svg
          className={`w-4 h-4 text-gray-600 transition-transform duration-300 ease-in-out ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        ref={contentRef}
        className="absolute top-full left-0 right-0 z-10 overflow-hidden transition-all duration-300 ease-in-out"
        style={{ 
          maxHeight: isOpen && contentRef.current ? `${contentRef.current.scrollHeight}px` : '0px'
        }}
      >
        <div className="mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
          {Object.keys(qcData).map((category, index) => (
            <div
              key={category}
              className={`px-4 py-3 hover:bg-gray-50 cursor-pointer select-none transition-colors duration-150 ease-in-out ${
                category === activeCategory ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'
              } ${
                index === 0 ? 'rounded-t-lg' : ''
              } ${
                index === Object.keys(qcData).length - 1 ? 'rounded-b-lg' : 'border-b border-gray-100'
              }`}
              onClick={() => {
                setActiveCategory(category);
                setIsOpen(false);
              }}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDropdown;
