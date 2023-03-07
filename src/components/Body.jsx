import React from 'react';

function Body() {
  return (
    <div className="px-5 ">
      <div className="bg-slate-300  hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 p-5 transition transform rounded-md ">
        <div className="text-gray-800 dark:text-gray-200 w-6 h-6 mb-3">icon</div>
        <h1 className="text-gray-800 dark:text-gray-200 text-lg font-bold leading-6 truncate">title</h1>
        <p className="text-gray-800 dark:text-gray-200 mb-5">description</p>
      </div>
    </div>
  );
}
export default Body;
