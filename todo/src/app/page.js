// src/app/page.js

import Image from "next/image";
import TodoList from "./todo/TodoList";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">React Todo App</h1>
      <TodoList />
    </div>
  );
}