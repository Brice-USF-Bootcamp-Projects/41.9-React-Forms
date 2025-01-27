// src/app/layout.js

import "./globals.css";

export const metadata = {
  title: "React Box App",
  description: "An app to dynamically add and remove boxes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}

