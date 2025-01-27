// src/app/boxes/BoxList.js

"use client";

import React, { useState } from "react";
import Box from "../components/boxes/Box";
import NewBoxForm from "../components/forms/NewBoxForm";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  // Add a new box to the state
  const add = (boxObj) => {
    setBoxes((boxes) => [...boxes, boxObj]);
  };

  // Remove a box by its id
  const remove = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  // Render each box
  const boxComponents = boxes.map((box) => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      height={box.height}
      handleRemove={remove}
      backgroundColor={box.backgroundColor}
    />
  ));

  return (
    <div className="flex flex-col items-center">
      <NewBoxForm createBox={add} />
      <div className="mt-4 space-y-4">{boxComponents}</div>
    </div>
  );
}

export default BoxList;
