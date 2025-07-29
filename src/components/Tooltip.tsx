import React from 'react';

interface TooltipProps {
  content: string;
}

const Tooltip: React.FC<TooltipProps> = ({ content }) => {
  return (
    <div className="tooltip-container">
      <div className="tooltip-trigger">?</div>
      <div className="tooltip-content">
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
