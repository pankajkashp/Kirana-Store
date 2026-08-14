import React from "react";

interface CategorySectionProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <section id="categories" className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Shop by category
        </h2>
        
        <div className="flex overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 space-x-2 hide-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                selectedCategory === category 
                  ? "bg-green-600 text-white border-green-600" 
                  : "bg-white text-gray-700 border-gray-300 hover:border-green-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
