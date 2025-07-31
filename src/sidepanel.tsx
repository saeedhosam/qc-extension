// src/sidepanel.tsx (or IndexSidebar.tsx)

import { useState } from "react";
import MainTabs from "~components/main-tabs";
import CategoryDropdown from "~components/category-dropdown";
import QcChecklist from "~components/qc-checklist";
import "~style.css";

function IndexSidebar() {
  const [activeTool, setActiveTool] = useState("QC");
  const [activeCategory, setActiveCategory] = useState("Issuance");

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
            <QcChecklist activeCategory={activeCategory} />
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
    </div>
  );
}

export default IndexSidebar;
