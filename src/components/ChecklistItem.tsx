import React from 'react';
import Tooltip from './Tooltip';

interface ChecklistItemProps {
  id: string;
  label: string;
  tooltip: string;
  checked: boolean;
  onChange: (id: string, checked: boolean) => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ 
  id, 
  label, 
  tooltip, 
  checked, 
  onChange 
}) => {
  const handleChange = () => {
    onChange(id, !checked);
  };

  const handleListItemClick = (event: React.MouseEvent) => {
    // Don't trigger if clicking on the tooltip
    if ((event.target as HTMLElement).closest('.tooltip-container')) {
      return;
    }
    
    // Don't trigger if clicking directly on the checkbox or label
    if ((event.target as HTMLElement).tagName === 'INPUT' || 
        (event.target as HTMLElement).tagName === 'LABEL') {
      return;
    }
    
    handleChange();
  };

  return (
    <li 
      className="flex items-center p-2 bg-white rounded border border-gray-200 mb-1.5 shadow-sm cursor-pointer select-none hover:bg-gray-50"
      onClick={handleListItemClick}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
        className="custom-checkbox mr-3"
      />
      <label
        htmlFor={id}
        className={`flex-grow cursor-pointer transition-all duration-200 ${
          checked 
            ? 'line-through text-gray-500' 
            : 'text-gray-800'
        }`}
      >
        {label}
      </label>
      <Tooltip content={tooltip} />
    </li>
  );
};

export default ChecklistItem;
