"use client";

import { Dashboard } from "@/components/panel/dashboard";
import { PanelSidebar } from "@/components/panel/sidebar";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <PanelSidebar />
      <Dashboard />
    </main>
  );
}
6;
