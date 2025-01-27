// src/app/components/Box.js

"use client";

import React from "react";

function Box({ id, handleRemove, width = 5, height = 5, backgroundColor = "blue" }) {
  const remove = () => handleRemove(id);

  return (
    <div className="flex items-center space-x-4">
      <div
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor,
        }}
        className="border rounded"
      />
      <button onClick={remove} className="bg-red-500 text-white px-2 py-1 rounded">
        X
      </button>
    </div>
  );
}

export default Box;

