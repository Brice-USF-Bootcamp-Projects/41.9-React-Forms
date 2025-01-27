// src/app/components/todo/todo.js


import React, { useState } from "react";

function Todo({ task = "default todo", id = "1", remove, update }) {
  const [editTask, setEditTask] = useState(task);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(edit => !edit);
  };

  const handleChange = evt => {
    setEditTask(evt.target.value);
  };

  const handleDelete = () => remove(id);

  const handleUpdate = evt => {
    evt.preventDefault();
    update(id, editTask);
    setIsEditing(false);
  };

  // default todo view
  let jsx = (
    <div className="text-blue-500">
      <li>{task}</li>
      <button 
        onClick={toggleEdit}
        className="bg-green-500 text-white px-4 py-2 rounded m-4"
      >
        Edit
      </button>
      <button 
        onClick={handleDelete}
        className="bg-red-500 text-white px-4 py-2 rounded m-4"
      >
        X
      </button>
    </div>
  );

  // todo view when editing
  if (isEditing) {
    jsx = (
      <div className="text-blue-800 m-4">
        <form onSubmit={handleUpdate}>
          <input type="text" value={editTask} onChange={handleChange} />
          <button className="bg-green-500 text-white px-4 py-2 rounded m-4">Update!</button>
        </form>
      </div>
    );
  }

  return jsx;
}

export default Todo;
