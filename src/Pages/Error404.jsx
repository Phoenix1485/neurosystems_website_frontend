import React from "react";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[30rem]">
      <div className="bg-bg-main-color p-4 rounded-lg shadow-lg text-center">
        <h1 className="text-red-600 text-4xl font-bold">Error 404</h1>
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl text-gray-300">
            The requested Page was not found.
          </span>
          <span className="text-lg text-gray-300">
            To the{" "}
            <a
              href="/"
              className="text-indigo-600 hover:text-indigo-700 hover:underline duration-300"
            >
              homepage
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Error404;
