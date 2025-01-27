// src/app/components/forms/NewTodoForm.js

'use client'
import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function NewTodoForm({ createTodo }) {
  const [task, setTask] = useState("");

  const handleChange = evt => {
    setTask(evt.target.value);
  };

  const gatherInput = evt => {
    evt.preventDefault();
    createTodo({ task, id: uuid() });
    setTask("");
  };

  return (
    <div className="text-blue-500 m-4">
      <form onSubmit={gatherInput}>
        <label htmlFor="task">Task:</label>
        <input
          id="task"
          name="task"
          type="text"
          onChange={handleChange}
          value={task}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded m-4">Add a todo!</button>
      </form>
    </div>
  );
}

export default NewTodoForm;
