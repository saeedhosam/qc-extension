import { useState } from "react"
import CategoryTabs from "~components/category-tabs"
import GlobalTooltip from "~components/global-tooltip"
import MainTabs from "~components/main-tabs"
import QcChecklist from "~components/qc-checklist"
import "~style.css"

function IndexSidebar() {
  const [activeTool, setActiveTool] = useState("QC")
  const [activeCategory, setActiveCategory] = useState("Issuance")
  const [tooltipText, setTooltipText] = useState("")
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  const handleTooltipClick = (text) => {
    setTooltipText(text)
    setIsTooltipVisible(true)
  }

  const handleCloseTooltip = () => {
    setIsTooltipVisible(false)
    setTooltipText("")
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <header>
        <MainTabs activeTool={activeTool} setActiveTool={setActiveTool} />
      </header>

      <main className="flex-1 overflow-y-auto">
        {activeTool === "QC" && (
          <div>
            <div className="sticky top-0 bg-gray-50 z-10 py-2">
              <CategoryTabs
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            </div>
            <QcChecklist
              key={activeCategory}
              activeCategory={activeCategory}
              onTooltipClick={handleTooltipClick}
            />
          </div>
        )}
        {activeTool === "Tasks" && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800">Tasks</h2>
            <p className="mt-2 text-gray-600">
              This is where your tasks will be displayed.
            </p>
          </div>
        )}
        {activeTool === "Taxes" && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800">Taxes</h2>
            <p className="mt-2 text-gray-600">
              Should be the next thing. 
            </p>
          </div>
        )}
      </main>

      <GlobalTooltip
        text={tooltipText}
        isVisible={isTooltipVisible}
        onClose={handleCloseTooltip}
      />
    </div>
  )
}

export default IndexSidebar
