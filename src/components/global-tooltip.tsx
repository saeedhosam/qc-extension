const GlobalTooltip = ({ text, isVisible }) => {
  if (!isVisible || !text) {
    return null; // Don't render anything if not visible or no text
  }

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 w-64 text-center text-sm text-white bg-gray-700 rounded-md shadow-lg z-50 pointer-events-none">
      {text}
    </div>
  );
};

export default GlobalTooltip;
