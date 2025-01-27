// src/app/page.js

import BoxList from "./boxes/BoxList";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">React Box App</h1>
      <BoxList />
    </div>
  );
}

