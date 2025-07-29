import React, { useState, useCallback } from 'react';
import { categories } from './data';
import { CategoryId, ChecklistItem as ChecklistItemType } from './types';
import CategorySelector from './components/CategorySelector';
import ChecklistItem from './components/ChecklistItem';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('issuance');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const handleCategoryChange = useCallback((categoryId: CategoryId) => {
    setSelectedCategory(categoryId);
  }, []);

  const handleItemChange = useCallback((itemId: string, checked: boolean) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: checked
    }));
  }, []);

  const handleReset = useCallback(() => {
    setCheckedItems({});
  }, []);

  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  return (
    <div className="w-[330px] p-5 bg-gray-100 text-gray-800 font-sans">
      <div className="flex justify-between items-center border-b-2 border-gray-300 pb-2 mb-4">
        <h1 className="text-xl font-semibold m-0">QC Checklist</h1>
        <button
          id="reset-btn"
          onClick={handleReset}
          title="Reset all checklists"
          className="bg-red-600 text-white border-none rounded px-3 py-1 text-sm font-bold cursor-pointer transition-colors hover:bg-red-700"
        >
          Reset
        </button>
      </div>

      <CategorySelector
        categories={categories}
        selectedCategory={selectedCategory}
        onChange={handleCategoryChange}
      />

      <div className="mt-4">
        {currentCategory && (
          <ul className="list-none p-0 m-0">
            {currentCategory.items.map((item: ChecklistItemType) => (
              <ChecklistItem
                key={item.id}
                id={item.id}
                label={item.label}
                tooltip={item.tooltip}
                checked={checkedItems[item.id] || false}
                onChange={handleItemChange}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
