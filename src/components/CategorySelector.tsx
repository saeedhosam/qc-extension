import React from 'react';
import { Category, CategoryId } from '../types';

interface CategorySelectorProps {
  categories: Category[];
  selectedCategory: CategoryId;
  onChange: (categoryId: CategoryId) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ 
  categories, 
  selectedCategory, 
  onChange 
}) => {
  return (
    <div className="mb-4">
      <select
        id="category-switcher"
        value={selectedCategory}
        onChange={(e) => onChange(e.target.value as CategoryId)}
        className="w-full p-3 text-base rounded border border-gray-300 bg-white cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%208l5%205%205-5z%22%20fill%3D%22%23505F79%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_10px_center]"
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
