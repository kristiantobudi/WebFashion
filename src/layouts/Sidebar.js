import React, { useState } from "react";

function Sidebar() {
  const [selectedCategory, setSelectedCategory] = useState("CLOTHING");
  const [subCategories, setSubCategories] = useState([
    "Tops",
    "Dresses",
    "Pants",
    "Denim",
    "Sweaters",
    "T-Shirts",
    "Jackets",
    "Activewear",
    "Browse All",
  ]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSubCategoryChange = (subcategory) => {
    if (subCategories.includes(subcategory)) {
      setSubCategories(subCategories.filter((item) => item !== subcategory));
    } else {
      setSubCategories([...subCategories, subcategory]);
    }
  };

  return (
    <aside className="flex flex-col w-64 h-screen px-16 py-16 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="-mx-3 space-y-6">
          <div className="space-y-3">
            <span className="flex item-center px-3 py-2 text-gray mx-2 text-sm font-medium font-Work">
              FILTER BY
            </span>
            <div key="CLOTHING">
              <button
                className={`flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg ${
                  selectedCategory === "CLOTHING"
                    ? "bg-gray-100 dark:bg-gray-800 dark:text-gray-200 hover:text-gray-700"
                    : "dark:text-gray-200 hover:bg-gray-100 dark:hover-bg-gray-800 dark:hover-text-gray-200 hover-text-gray-700"
                }`}
                onClick={() =>
                  handleCategoryChange(
                    selectedCategory === "CLOTHING" ? null : "CLOTHING"
                  )
                }
              >
                <span className="mx-2 text-sm font-medium">CLOTHING</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              {selectedCategory === "CLOTHING" && (
                <ul>
                  {subCategories.map((subcategory) => (
                    <li key={subcategory}>
                      <label className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg">
                        <input
                          type="checkbox"
                          checked={subCategories.includes(subcategory)}
                          onChange={() => handleSubCategoryChange(subcategory)}
                          className="mx-2"
                        />
                        <span className="text-sm font-medium">{subcategory}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button
              className={`flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg ${
                selectedCategory === "ACCESSORIES"
                  ? "bg-gray-100 dark:bg-gray-800 dark:text-gray-200 hover:text-gray-700"
                  : "dark:text-gray-200 hover-bg-gray-100 dark:hover-bg-gray-800 dark:hover-text-gray-200 hover-text-gray-700"
              }`}
              onClick={() => handleCategoryChange("ACCESSORIES")}
            >
              <span className="mx-2 text-sm font-medium">ACCESSORIES</span>
            </button>
            <button
              className={`flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg ${
                selectedCategory === "BRAND"
                  ? "bg-gray-100 dark:bg-gray-800 dark:text-gray-200 hover-text-gray-700"
                  : "dark:text-gray-200 hover-bg-gray-100 dark:hover-bg-gray-800 dark:hover-text-gray-200 hover-text-gray-700"
              }`}
              onClick={() => handleCategoryChange("BRAND")}
            >
              <span className="mx-2 text-sm font-medium">BRAND</span>
            </button>
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
