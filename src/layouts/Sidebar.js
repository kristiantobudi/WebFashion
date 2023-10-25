import React, { useState } from "react";

function Sidebar() {
    const [selectedCategory, setSelectedCategory] = useState("CLOTING");
    const [subCategories, setSubCategory] = useState([
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

    return(
        <aside class="flex flex-col w-64 h-screen px-16 py-16 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
            <div class="flex flex-col justify-between flex-1 mt-6">
                <nav class="-mx-3 space-y-6 ">
                    <div class="space-y-3 ">
                        <span class="flex item-center px-3 py-2 text-gray mx-2 text-sm font-medium font-Work">FILTER BY</span>
                        {subCategories.map((category) => (
                            <div key={category}>
                                <a
                                className={`flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg ${
                                    selectedCategory === category
                                    ? "bg-gray-100 dark:bg-gray-800 dark:text-gray-200 hover:text-gray-700"
                                    : "dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                                }`}
                                href="#"
                                onClick={() => handleCategoryChange(category)}
                                >
                                <span className="mx-2 text-sm font-medium">{category}</span>
                                </a>
                            </div>
                            ))}
                        <a class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">

                            <span class="mx-2 text-sm font-medium">ACCESSORIES</span>
                        </a>

                        <a class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <span class="mx-2 text-sm font-medium">BRAND</span>
                        </a>
                    </div>
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;