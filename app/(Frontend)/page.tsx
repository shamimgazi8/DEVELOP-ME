"use client";

import ThemeToggle from "@/modules/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <ThemeToggle />
      <h1 className="text-4xl font-bold mt-6">Dark Mode Test</h1>
      <p className="mt-2">Toggle the button to switch themes.</p>
    </main>
  );
}
