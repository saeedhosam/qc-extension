const GlobalTooltip = ({ text, isVisible, onClose }) => {
  if (!isVisible || !text) {
    return null
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose} // Close when clicking the overlay
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div
        className="relative max-w-sm p-6 bg-white rounded-lg shadow-xl text-center"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the tooltip
      >
        <p className="text-gray-700 select-none">{text}</p>
      </div>
    </div>
  )
}

export default GlobalTooltip
