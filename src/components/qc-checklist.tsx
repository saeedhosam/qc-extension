import { ExpandableCard } from "./expandable-card";
import qcData from "~assets/qc-data.json";

const QcChecklist = ({ activeCategory, onTooltipClick }) => { // <-- New props
  const cards = qcData[activeCategory] || [];

  return (
    <div className="flex flex-col items-center px-4 w-full">
      <div className="w-full max-w-md">
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
  );
};

export default QcChecklist;
