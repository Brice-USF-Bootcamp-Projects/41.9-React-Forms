// src/app/components/forms/NewBoxForm.js

"use client";

import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewBoxForm({ createBox }) {
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const gatherInput = (evt) => {
    evt.preventDefault();
    createBox({ ...formData, id: uuid() });
    setFormData({ height: "", width: "", backgroundColor: "" });
  };

  return (
    <form onSubmit={gatherInput} className="flex flex-col space-y-4">
      <div className="text-blue-500">
        <label htmlFor="height" className="block mb-1">
          Height:
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="height"
          id="height"
          value={formData.height}
          className="border rounded p-2 text-blue-500"
        />
      </div>
      <div className="text-blue-500">
        <label htmlFor="width" className="block mb-1">
          Width:
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="width"
          id="width"
          value={formData.width}
          className="border rounded p-2 text-blue-500"
        />
      </div>
      <div className="text-blue-500">
        <label htmlFor="backgroundColor" className="block mb-1">
          Background Color:
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="backgroundColor"
          id="backgroundColor"
          value={formData.backgroundColor}
          className="border rounded p-2 text-blue-500"
        />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Add a new box!</button>
    </form>
  );
  
}
export default NewBoxForm;
