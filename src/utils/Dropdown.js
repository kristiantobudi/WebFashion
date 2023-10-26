import React, { useState } from "react";

function DropdownHelper() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    };

    <div>
        <button
            id="dropdownHelperButton"
            data-dropdown-toggle="dropdownHelper"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium font-Work rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-700 dark:focus:ring-blue-800"
            type="button"
            onClick={toggleDropdown}
        >
            Dropdown checkbox
            <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
            >
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    strong-lineJoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                />
            </svg>
        </button>

        {isDropdownOpen && (
            <div
                id="dropdownHelper"
                className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700 dark:divide-gray-600"
            >
                <ul
                    className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownHelperButton"
                >
                    <li>
                        <div className="flex p-2 rounded hover:bg-gray-100 dark:hover-bg-gra-600">
                            <div className="flex items-center h-5">
                                <input
                                id="helper-checkbox-1"
                                aria-describedby="helper-checkbox-text-1"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                 />
                            </div>
                            <div className="ml-2 text-sm">
                                <label 
                                    htmlFor="helper-checkbox-1"
                                    className="font-medium text-gray-900 dark:text-gray-300"
                                >
                                <div>Enable notifications</div>
                                <p
                                    id="helper-checkbox-text-1"
                                    className="text-xs font-normal text-gray-500 dark:text-gray-300"
                                >
                                    Some helpful intruction goes over here.
                                </p>
                                </label>
                            </div>
                        </div> 
                    </li>
                    <li>
              <div className="flex p-2 rounded hover:bg-gray-100 dark:hover-bg-gray-600">
                <div className="flex items-center h-5">
                  <input
                    id="helper-checkbox-2"
                    aria-describedby="helper-checkbox-text-2"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
                <div className="ml-2 text-sm">
                  <label
                    htmlFor="helper-checkbox-2"
                    className="font-medium text-gray-900 dark:text-gray-300"
                  >
                    <div>Enable 2FA auth</div>
                    <p
                      id="helper-checkbox-text-2"
                      className="text-xs font-normal text-gray-500 dark:text-gray-300"
                    >
                      Some helpful instruction goes over here.
                    </p>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex p-2 rounded hover:bg-gray-100 dark:hover-bg-gray-600">
                <div className="flex items-center h-5">
                  <input
                    id="helper-checkbox-3"
                    aria-describedby="helper-checkbox-text-3"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
                <div className="ml-2 text-sm">
                  <label
                    htmlFor="helper-checkbox-3"
                    className="font-medium text-gray-900 dark:text-gray-300"
                  >
                    <div>Subscribe newsletter</div>
                    <p
                      id="helper-checkbox-text-3"
                      className="text-xs font-normal text-gray-500 dark:text-gray-300"
                    >
                      Some helpful instruction goes over here.
                    </p>
                  </label>
                </div>
              </div>
            </li>
            </ul>
            </div>
        )}

    </div>
}

export default DropdownHelper;