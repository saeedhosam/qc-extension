import qcData from "~assets/qc-data.json"

import { ExpandableCard } from "./expandable-card"

const QcChecklist = ({ activeCategory, onTooltipClick }) => {
  const cards = qcData[activeCategory] || []

  return (
    <div className="w-full px-4">
      <div className="space-y-3">
        {cards.map((card, index) => (
          <ExpandableCard
            key={index}
            title={card.title}
            items={card.checkboxes}
            onTooltipClick={onTooltipClick}
          />
        ))}
      </div>
    </div>
  )
}

export default QcChecklist
