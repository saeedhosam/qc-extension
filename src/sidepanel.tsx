import { useState } from "react";
import CategoryDropdown from "~components/category-dropdown"
import GlobalTooltip from "~components/global-tooltip"
import MainTabs from "~components/main-tabs"
import QcChecklist from "~components/qc-checklist"
import "~style.css";

function IndexSidebar() {
  const [activeTool, setActiveTool] = useState("QC");
  const [activeCategory, setActiveCategory] = useState("Issuance");

  const [tooltipText, setTooltipText] = useState("");
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = (text) => {
    setTooltipText(text);
    setIsTooltipVisible(true);
  };
  const handleMouseLeave = () => {
    setTooltipText("");
    setIsTooltipVisible(false);
  };

  return (
    <div className="flex flex-col items-center">
      <MainTabs activeTool={activeTool} setActiveTool={setActiveTool} />
      <div className="w-full">
        {activeTool === "QC" && (
          <div className="flex flex-col items-center justify-center mt-5">
            <CategoryDropdown
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            <QcChecklist
              activeCategory={activeCategory}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        )}
        {activeTool === "Tasks" && (
          <div className="p-4 flex flex-col items-center justify-center mt-5">
            <p>This is the Tasks tool!</p>
          </div>
        )}
        {activeTool === "Taxes" && (
          <div className="p-4 flex flex-col items-center justify-center mt-5">
            <p>This is the Taxes tool!</p>
          </div>
        )}
      </div>

      {isTooltipVisible && ( // <-- NEW: Conditionally render the backdrop
        <div className="fixed inset-0 bg-black/50 z-40"></div>
      )}
      
      <GlobalTooltip text={tooltipText} isVisible={isTooltipVisible} />
    </div>
  );
}

export default IndexSidebar;
